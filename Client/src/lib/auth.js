export function isLoggedIn() {
  return !!localStorage.getItem("leetlens_user");
}

export function getAuthRedirect() {
  return isLoggedIn() ? "/generate" : "/signup";
}

export function getUser() {
  const raw = localStorage.getItem("leetlens_user");
  return raw ? JSON.parse(raw) : null;
}

export function logout() {
  localStorage.removeItem("leetlens_user");
}