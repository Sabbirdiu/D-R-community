import React, { Fragment, useState } from 'react';

import { Link, Redirect } from 'react-router-dom';

// import './registration.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  //Redirect if loggin in account

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <div className='containerl'>
        <div className='form-wrap'>
          <h1>Sign In</h1>
          <p>Sign in your Account</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                placeholder='Password'
                name='password'
                minLength='8'
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>

            <button type='submit' className='btn'>
              Sign In
            </button>
          </form>
        </div>
      </div>
      <footer>
        <p>
          Don't have an account? <Link to='/register'>Sign Up</Link> now
        </p>
      </footer>
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
