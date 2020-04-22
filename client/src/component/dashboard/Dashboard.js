import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import './dashboard.css';

import Spinner from '../layout/Spinner';
import DashboardEdit from './DashboardEdit';
import Experience from './Experience';
// import Education from './Education';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../redux/actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardEdit />
          <Experience experience={profile.experience} />

          {/* <Education experience={profile.education} /> */}
          <div className='my-2'>
            <button onClick={() => deleteAccount()} className='btn btn-danger'>
              deleteaccount
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            You have not a profile..Please setup a profile and add your info
          </p>
          <Link to='/create-profile' className='btn'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
