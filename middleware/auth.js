import axios from "axios";
export default async function ({ store, error }) {
  if (!store.state.token) {
    error({
      message: 'You are not connected',
      statusCode: 403
    })
  } else {
    let user = store.state.authUser;
    const userAlive = await axios.post('https://jav.souzou.dev/jav4free/user/currentAlive', { user }, {
      headers: {
        'x-access-token': store.state.token
      }
    });
    if (!userAlive.data.alive) {
      error({
        message: 'Token not valid!',
        statusCode: 403
      })
    }
  }
}
