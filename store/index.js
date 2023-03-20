import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const state = () => ({
  authUser: null,
  token: null,
  history: []
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
  ADD_HISTORY(state, scene) {
    if (scene && !state.history.includes(scene)) {
      state.history.push(scene);
      this.$cookies.set('history', state.history, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }
  }
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

    let cookieHistory
    if (this.$cookies.get('history')) {
      cookieHistory = this.$cookies.get('history');
    } else {
      cookieHistory = [];
      this.$cookies.set('history', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }

    let userAlive;

    if (cookieToken && cookieUser) {
      userAlive = await axios.post('https://jav.souzou.dev/users/currentAlive', { cookieUser }, {
        headers: {
          'authorization': cookieToken
        }
      });
    } else {
      userAlive = false;
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
      const user = await axios.post('https://jav.souzou.dev/users/login', { email, password })
      commit('SET_USER', user)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('Bad credentials')
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
  async viewScene({ commit }, { scene }) {
    try {
      commit('ADD_HISTORY', scene)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log('Error adding scene to history')
        throw new Error('Error adding scene to history')
      }
      throw error
    }
  },

}