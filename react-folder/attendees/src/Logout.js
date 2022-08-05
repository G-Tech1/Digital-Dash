function LogoutRedirect () {
    let token = localStorage.getItem('token')
    console.log(token)
    if (token === true) {
        return localStorage.setItem('token', null );
    }
    window.location.href = "login"
}
export default LogoutRedirect;