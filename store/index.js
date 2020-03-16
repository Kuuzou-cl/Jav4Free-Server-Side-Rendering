import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const state = () => ({
  authUser: null,
  admin: false,
  history: [],
  breadCrumbs: [{ page: "Home", show: "Home", route: "" }]
})

export const getters = {
  getHistory: state =>{
    return state.history;
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
  ADD_HISTORY(state, javId) {
    if (javId) {
      if (!state.history.some(item => item === javId)) {
        state.history.push(javId);
      }
      this.$cookies.set('history', state.history, {
        path: '/',
        maxAge: 60 * 60 * 24 * 14
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
      state.admin = user.data.userState
      this.$cookies.set('userState', user.data.userState, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    } else {
      state.authUser = user
      this.$cookies.set('user', null, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      state.admin = false
      this.$cookies.set('userState', false, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    }
  },
  SET_BREADCRUMBS(state, page) {
    if (page) {
      if (page.page == "Home") {
        let newCrumbs = [{ page: "Home", route: "" }];
        state.breadCrumbs = newCrumbs;
      } else {
        if (page.page == "Categories") {
          let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
          state.breadCrumbs = newCrumbs;
        } else {
          if (page.page == "Idols") {
            let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
            state.breadCrumbs = newCrumbs;
          } else {
            if (page.page == "Idol") {
              let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: "Idols", show: "Idols", route: "idols/1" }, { page: page.page, show: page.show, route: page.route }];
              state.breadCrumbs = newCrumbs;
            } else {
              if (page.page == "Category") {
                let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: "Categories", show: "Categories", route: "categories" }, { page: page.page, show: page.show, route: page.route }];
                state.breadCrumbs = newCrumbs;
              } else {
                if (page.page == "Javs") {
                  let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
                  state.breadCrumbs = newCrumbs;
                } else {
                  if (page.page == "Jav") {
                    let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: "Javs", show: "Javs", route: "javs/1" }, { page: page.page, show: page.show, route: page.route }];
                    state.breadCrumbs = newCrumbs;
                  } else {
                    if (page.page == "Search") {
                      let newCrumbs = [{ page: "Home", show: "Home", route: "" }, { page: page.page, show: page.show, route: page.route }];
                      state.breadCrumbs = newCrumbs;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export const actions = {
  nuxtServerInit({ commit, state }, { req }) {
    const cookieUser = this.$cookies.get('user');
    const cookieUserState = this.$cookies.get('userState');
    const cookieHistory = this.$cookies.get('history');
    if (cookieUser) {
      let userData = {
        "data": {
          "user": cookieUser,
          "userState": cookieUserState
        }
      }
      commit('SET_USER', userData)
    } else {
      commit('SET_USER', null)
    }
    if (cookieHistory) {
      commit('SET_HISTORY', cookieHistory);
    } else {
      commit('SET_HISTORY', null);
    }
  },

  addToHistory({ commit }, { javId }) {
    commit('ADD_HISTORY', javId);
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
    commit('SET_USER', null)
  },

  async addCrumb({ commit }, { page, show, route }) {
    let newPage;
    if (page == "Idol") {
      let idolId = show;
      let idol = await axios.get(
        "https://jav.souzou.dev/jav4free/idols/" + idolId
      );
      newPage = { page: page, show: idol.data.idol.name, route: route }
    } else {
      if (page == "Category") {
        let categoryId = show;
        let category = await axios.get(
          "https://jav.souzou.dev/jav4free/categories/" + categoryId
        );
        newPage = { page: page, show: category.data.category.name, route: route }
      } else {
        if (page == "Jav") {
          let javId = show;
          let jav = await axios.get(
            "https://jav.souzou.dev/jav4free/javs/" + javId
          );
          newPage = { page: page, show: jav.data.jav.code, route: route }
        } else {
          if (page == "Search") {
            newPage = { page: page, show: show, route: route }
          } else {
            newPage = { page: page, show: show, route: route }
          }
        }
      }
    }
    commit('SET_BREADCRUMBS', newPage)
  },

}