export function isLoggedIn() {
  return !!localStorage.getItem("leetlens_user");
}

export function getAuthRedirect() {
  return isLoggedIn() ? "/generate" : "/signup";
}