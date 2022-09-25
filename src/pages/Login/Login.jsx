import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-title">
          <p className="login-title-text">Login</p>
        </div>
        <div className="horizontal-line"></div>
        <div className="form-default">
          <form>
            <div className="form-item">
              <p className="form-item-title">Email</p>
              <div className="input-default">
                <input type="text" placeholder="email" />
              </div>
              <div className="span-danger">
                <span className="text-err"></span>
              </div>
            </div>
            <div className="space-betwwen-form-item"></div>
            <div className="form-item">
              <p className="form-item-title">Password</p>
              <div className="input-default">
                <input type="text" placeholder="password" />
                <div className="eye-input">
                  <div className="eye-open">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                  <div className="eye-closed">
                    <i className="fa-regular fa-eye-slash"></i>
                  </div>
                </div>
                <div className="span-danger">
                  <span className="text-err"></span>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="register-now">
          <span className="register-now-question">Register now ?</span>
          <button className="button-login">LOGIN</button>
        </div>
        <div className="login-with-facebook">
          <button className="button-facebook">
            <i class="fa-brands fa-facebook"></i> Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
