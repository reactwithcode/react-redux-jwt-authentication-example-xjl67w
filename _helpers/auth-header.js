//reuasability function code
export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    //frontend akses token dari backend dan di konfigurasikan dengan property Authorization di header
    //localStorage/ session, cache
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
