import React from "react";
import "./App.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
      email: "",
      username: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirm_password) {
      return alert("passwords do not match. Please try again");
    }
    const data = { ...this.state };
    delete data.confirm_password;

    const signUpUrl = "http://localhost:8000/accounts/accounts/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await fetch(signUpUrl, fetchConfig);
    if (response.ok) {
      const newUser = await response.json();
      console.log(newUser);

      const cleared = {
        first_name: "",
        last_name: "",
        password: "",
        email: "",
        username: "",
      };
      this.setState(cleared);
      window.location.href = "login";
    }
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
                <h1 className="card-title">Sign Up</h1>
                <div className="form-floating mb-3">
                  <input
                    required
                    onChange={this.handleChange}
                    value={this.state.first_name}
                    placeholder="First name"
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="form-control"
                  />
                  <label htmlFor="first_name">First name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    onChange={this.handleChange}
                    value={this.state.last_name}
                    placeholder="Last name"
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="form-control"
                  />
                  <label htmlFor="last_name">Last name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    onChange={this.handleChange}
                    value={this.state.email}
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label htmlFor="email">Email</label>
                </div>
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
                <div className="form-floating mb-3">
                  <input
                    required
                    onChange={this.handleChange}
                    value={this.state.confirm_password}
                    placeholder="Password"
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    className="form-control"
                  />
                  <label htmlFor="confirm_password">Confirm Password</label>
                </div>
                <button className="btn btn-lg btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUpForm;
