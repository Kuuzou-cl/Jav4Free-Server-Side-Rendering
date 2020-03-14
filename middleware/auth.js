export default function ({ store, error }) {
    if (!store.state.authUser && !store.state.admin) {
      error({
        message: 'You are not connected',
        statusCode: 403
      })
    }
  }
  