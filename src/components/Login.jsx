export default function Login() {
  return (
    <div className="Login">
      <h1 className="login-welcome">Welcome back ;)</h1>
      <form className="login-form">
        <div className="form-container">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-container">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="text" id="password" name="password" />
        </div>

        <div className="extra-info-container">
          <div className="remember-me-container">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              value="RememberMe"
            />
            <label htmlFor="remember-me" className="remember-me-label">
              Remember Me
            </label>
          </div>

          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
        <input type="submit" value="Login" className="login-button" />
      </form>
    </div>
  );
}
