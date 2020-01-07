import axios from 'axios'

export const state = () => ({
  authUser: null,
  breadCrumbs: [{ page: "Home", show: "Home", route: "" }]
})

export const mutations = {
  SET_USER(state, user) {
    if (user) {
      state.authUser = user.data.user
    } else {
      state.authUser = user
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
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
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
          newPage = { page: page, show: show, route: route }
        }
      }
    }

    commit('SET_BREADCRUMBS', newPage)
  }

}