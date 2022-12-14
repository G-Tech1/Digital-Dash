import React from "react";
import { Link } from "react-router-dom";
class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const loginUrl = "http://localhost:8000/login/";
    const fetchConfig = {
      method: "post",
      body: new FormData(event.target),
      credentials: "include",
    };
    const response = await fetch(loginUrl, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      const token = data.access;
      localStorage.setItem("token", token);
      const res = await fetch("http://localhost:8000/accounts/accounts/");
      const user = await res.json();
      const userList = user.accounts;
      for (let obj of userList) {
        if (obj["username"] === this.state.username) {
          localStorage.setItem("email", obj["email"]);
        }
      }
      window.location.href = "/";
    }
    // DO SOMETHING WITH THE ERROR, IF YOU WANT
  }
  handleChange(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-5">
          <div className="col col-sm-auto">
            <img
              width="300"
              alt=""
              className="bg-white rounded shadow d-block mx-auto mb-4"
              src="/logo.svg"
            />
          </div>
          <div className="card shadow">
            <div className="card-body">
              <form id="create-technician-form" onSubmit={this.handleSubmit}>
                <h1 className="card-title">Log In</h1>
                <div className="form-floating mb-3">
                  <input
                    required
                    onChange={this.handleChange}
                    value={this.state.username}
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    onChange={this.handleChange}
                    value={this.state.password}
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <button className="btn btn-lg btn-primary">Log In</button>
              </form>
              <p>
                Don't have an account?{" "}
                <Link to="/accounts/signup">Sign Up here!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LogInForm;
