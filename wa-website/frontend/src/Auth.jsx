import { useState } from 'react';
import './Auth.css';

function Auth({ onSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isLogin && !formData.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formData.password) {
      nextErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;
    // Placeholder for API integration.
    console.log('Auth form submitted:', { isLogin, ...formData });
    if (onSuccess) onSuccess();
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setShowPassword(false);
    setErrors({});
  };

  return (
    <div className="auth-container">
      {/* Left Side */}
      <div className="brand-side">
        <div className="brand-badge" aria-hidden="true">
          WA
        </div>
        <p className="brand-kicker">Trusted digital partner</p>
        <h1>WA Software Company</h1>
        <p>Innovating the future of web development and software solutions.</p>
      </div>

      {/* Right Side */}
      <div className="form-side">
        <div className="auth-card">
          <h2>{isLogin ? 'Welcome back' : 'Create an account'}</h2>
          <p className="toggle-text">
            {isLogin ? 'New to WA Software?' : 'Already have an account?'}{' '}
            <button type="button" className="toggle-link" onClick={toggleMode}>
              {isLogin ? ' Sign up for free' : ' Log in'}
            </button>
          </p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {!isLogin && (
              <div className="field-group">
                <label className="auth-label" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className={`auth-input ${errors.fullName ? 'input-error' : ''}`}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="input-hint error-text">
                    {errors.fullName}
                  </p>
                )}
              </div>
            )}

            <div className="field-group">
              <label className="auth-label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                className={`auth-input ${errors.email ? 'input-error' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <p id="email-error" className="input-hint error-text">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="field-group">
              <label className="auth-label" htmlFor="password">
                Password
              </label>
              <div className="password-group">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="At least 8 characters"
                  className={`auth-input ${errors.password ? 'input-error' : ''}`}
                  value={formData.password}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby="password-hint password-error"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <p id="password-hint" className="input-hint">
                Use 8+ characters with a mix of letters and numbers.
              </p>
              {errors.password && (
                <p id="password-error" className="input-hint error-text">
                  {errors.password}
                </p>
              )}
            </div>

            <button type="submit" className="auth-button">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;