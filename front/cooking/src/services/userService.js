import axios from "axios";

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
};

export default userService;
