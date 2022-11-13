import axios from "axios";
export default async function ({ redirect , store, error }) {
  if (!store.state.token) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  } else {
    let email = store.state.authUser;

    const userAlive = await axios.post('https://jav.souzou.dev/users/currentAlive', { email }, {
      headers: {
        'authorization': store.state.token
      }
    });

    if (!userAlive.data.alive) {
      store.dispatch("logout");
      return redirect('/')
    }
  }
}
