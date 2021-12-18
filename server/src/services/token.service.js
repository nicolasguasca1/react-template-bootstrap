// const getLocalRefreshToken = (res) => {
//   const user = res.cookie;
//   return user?.refreshToken;
// };

// ANTES SE LLAMABA accessToken EN VEZ DE refreshToken
// const getLocalAccessToken = (req) => {
//   const user = req.cookie;
//   return user?.refreshToken;
// };

// const updateLocalAccessToken = (token) => {
//   let user = JSON.parse(localStorage.getItem("user"));
//   user.accessToken = token;
//   localStorage.setItem("user", JSON.stringify(user));
// };

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const setUser = (user) => {
  console.log(JSON.stringify(user));
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem("user");
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser
};

export default TokenService;
