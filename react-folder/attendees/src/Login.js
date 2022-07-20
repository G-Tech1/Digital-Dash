import React from 'react';

class LogInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            username: ''
          };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    async handleSubmit(event) {
        event.preventDefault();
        const loginUrl = 'http://localhost:8100/login/'
        const fetchConfig = {
            method: "post",
            body: new FormData(event.target),
            credentials: 'include',
        };
       const response = await fetch(loginUrl, fetchConfig);
       if (response.ok) {
        const Url = `http://localhost:8100/api/tokens/mine/`;
          // localStorage.setItem('access_token', response.headers.jwt_access_token)
          // localStorage.setItem('refresh_token', response.headers.jwt_refresh)
          // window.location.href = "/"
       try {
        const response = await fetch(Url, {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          const token = data.token;
          localStorage.setItem('token', token)
          // DO SOMETHING WITH THE TOKEN SO YOU CAN USE IT
          // IN REQUESTS TO YOUR NON-ACCOUNTS SERVICES
          window.location.href = "/"
        }
      } catch (e) {
        console.log(e)
      }
    }
    // DO SOMETHING WITH THE ERROR, IF YOU WANT
       }
    handlePasswordChange(event) {
        const value = event.target.value;
        this.setState({password: value})
    }
    handleUsernameChange(event) {
        const value = event.target.value;
        this.setState({username: value})
    }
    render() {
    return (
        <div className="my-5">
      <div className="row">
        <div className="col col-sm-auto">
          <img width="300" alt="" className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" />
        </div>
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form id="create-technician-form" onSubmit={this.handleSubmit}>
                <h1 className="card-title">Log In</h1>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input required onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password" type="password" id="password" name="password" className="form-control" />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input required onChange={this.handleUsernameChange} value={this.state.username} placeholder="Username" type="text" id="username" name="username" className="form-control" />
                      <label htmlFor="username">Username</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
}
export default LogInForm;