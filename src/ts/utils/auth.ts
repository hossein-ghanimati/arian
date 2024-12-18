
const generateAuthPagesLink = (page : "login" | "register") => 
  `/${page}?after=${location.pathname === "/login" || location.pathname === "/register" ? "/" : location.pathname}`


export {
  generateAuthPagesLink
}