function LogoutRedirect () {
    let token = localStorage.getItem('token')
    console.log(token)
    if (token === true) {
        let token = '';
        return token
    }
    console.log(token)
    window.location.href = "login";
}
export default LogoutRedirect;