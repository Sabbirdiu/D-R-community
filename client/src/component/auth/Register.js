import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';

import PropTypes from 'prop-types';

import './registration.css';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='containerl'>
        <div className='body'>
          <div className='form-wrap'>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                {/* <label> Name</label> */}
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className='form-group'>
                {/* <label>Email</label> */}
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                />
                <small className='form-text'>
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className='form-group'>
                {/* <label>Password</label> */}
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className='form-group'>
                {/* <label>Confirm Password</label> */}
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='password2'
                  value={password2}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <button type='submit' className='btn'>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </footer>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);
