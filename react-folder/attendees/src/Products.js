function ProductList() {
    if (localStorage.getItem('token') == null) {
        alert("Please login in order to access our performance monitoring tools")
        window.location.href = "login"
    }
    return (
        <div>
            <div>
              <h2>Bandwidth Monitoring Tool CLI</h2>
              <p> A performace monitoring tool that keeps track of your average bandwidth usage across sessions.</p>
              <a href="" download>CLI Bandwidth Monitoring Tool</a>
            </div>
        </div>
    )
}