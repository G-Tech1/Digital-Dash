function LogoutRedirect() {
  let token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    localStorage.setItem("token", null);
  window.location.href = "login";
  return alert("you have been logged out")
  }
}
export default LogoutRedirect;
