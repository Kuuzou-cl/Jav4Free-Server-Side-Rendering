import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const state = () => ({
  authUser: null,
  token: null
})

export const getters = {
}

export const mutations = {
  SET_USER(state, user) {
    if (user) {
      state.authUser = user.data.user
      this.$cookies.set('user', user.data.user, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      state.token = user.data.token
      this.$cookies.set('token', user.data.token, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    } else {
      state.authUser = null
      this.$cookies.set('user', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      state.token = null
      this.$cookies.set('token', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }
  },
}

export const actions = {
  async nuxtServerInit({ commit, state }, { req }) {

    let cookieUser;
    if (this.$cookies.get('user')) {
      cookieUser = this.$cookies.get('user');
    } else {
      cookieUser = null;
      this.$cookies.set('user', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }
    let cookieToken;
    if (this.$cookies.get('token')) {
      cookieToken = this.$cookies.get('token');
    } else {
      cookieToken = null;
      this.$cookies.set('token', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }

    let userAlive;

    if (cookieToken && cookieUser) {
      userAlive = await axios.post('https://jav.souzou.dev/jav4free/user/currentAlive', { cookieUser }, {
        headers: {
          'x-access-token': cookieToken
        }
      });
    }else{
      userAlive = null;
    }

    if (!userAlive) {
      commit('SET_USER', null)
    } else {
      let userData = {
        "data": {
          "user": cookieUser,
          "token": cookieToken
        }
      }
      commit('SET_USER', userData)
    }
  },
  async login({ commit }, { email, password }) {
    try {
      const user = await axios.post('https://jav.souzou.dev/jav4free/user/login', { email, password })
      commit('SET_USER', user)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout({ commit }) {
    try {
      commit('SET_USER', null)
    } catch (error) {
      throw error;
    }
  },

}