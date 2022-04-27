import axios from "axios";
import storage from '../plugins/Storage'

const userService = {
  baseURI: process.env.VUE_APP_WORDPRESS_API_URL + "/jwt-auth/v1",

  login: async (login, password) => {
    let response = await axios.post(userService.baseURI + "/token", {
      username: login,
      password: password,
    }).catch(() => {
        return false
    })

    return response.data;
  },

  logout: () => {
    storage.unset('userData')
  },

  async isLoggedIn() {
    // retrieve token from localStorage
    const userData = storage.get('userData');
    // is userData empty ?
    if(userData != null) {
      const token = userData.token;
      if(token) {
        // api call to validate token
        const options = {
          headers: {
            Authorization: 'Bearer' + token
          }
        }
        const response = await axios.post(
          userService.baseURI + '/token/validate',
          null,
          options
        ).catch(() => {
          // invalid token
          return false
        })
        return response.data
      }
    }
    return false
  }
};

export default userService;
