import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const state = () => ({
  authUser: null,
  token: null,
  history: [],
  favorites: [],
  breadCrumbs: [{ page: "Home", show: "Home", route: "" }]
})

export const getters = {
  getHistory: state => {
    return state.history;
  },
  getFavorites: state => {
    return state.favorites;
  },
  checkFavorite: (state) => (javId) => {
    if (state.favorites.some(item => item === javId)) {
      return true;
    } else {
      return false;
    }
  },
  getLanguage: state => {
    return state.language;
  }
}

export const mutations = {
  SET_HISTORY(state, history) {
    if (history) {
      state.history = history;
      this.$cookies.set('history', history, {
        path: '/',
        maxAge: 60 * 60 * 24 * 14
      })
    } else {
      state.history = [];
      this.$cookies.set('history', [], {
        path: '/',
        maxAge: 60 * 60 * 24 * 14
      })
    }
  },
  SET_FAVORITES(state, favorites) {
    if (favorites) {
      state.favorites = favorites;
      this.$cookies.set('favorites', favorites, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    } else {
      state.favorites = [];
      this.$cookies.set('favorites', [], {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    }
  },
  ADD_HISTORY(state, javId) {
    if (javId) {
      if (!state.history.some(item => item === javId)) {
        state.history.unshift(javId);
      }
      this.$cookies.set('history', state.history, {
        path: '/',
        maxAge: 60 * 60 * 24 * 14
      })
    }
  },
  ADD_FAVORITE(state, javId) {
    if (javId) {
      if (!state.favorites.some(item => item === javId)) {
        state.favorites.unshift(javId);
      } else {
        const index = state.favorites.findIndex(item => item === javId);
        state.favorites.splice(index, 1);
      }
      this.$cookies.set('favorites', state.favorites, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    }
  },
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
    let cookieHistory;
    if (this.$cookies.get('history')) {
      cookieHistory = this.$cookies.get('history');
    } else {
      cookieHistory = null;
      this.$cookies.set('history', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }
    let cookieFavorites;
    if (this.$cookies.get('favorites')) {
      cookieFavorites = this.$cookies.get('favorites');
    } else {
      cookieFavorites = null;
      this.$cookies.set('favorites', null, {
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

    if (cookieHistory) {
      commit('SET_HISTORY', cookieHistory);
    } else {
      commit('SET_HISTORY', null);
    }

    if (cookieFavorites) {
      commit('SET_FAVORITES', cookieFavorites);
    } else {
      commit('SET_FAVORITES', null);
    }
  },

  addToHistory({ commit }, { javId }) {
    commit('ADD_HISTORY', javId);
  },

  addToFavorites({ commit }, { javId }) {
    commit('ADD_FAVORITE', javId);
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