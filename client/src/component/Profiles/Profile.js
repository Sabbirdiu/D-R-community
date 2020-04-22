import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './profile.css';

const Profile = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
  },
}) => {
  return (
    // <div className='profile bg-light'>
    //   <img src={avatar} alt='' className='round-img' />
    //   <div>
    //     <h2>{name}</h2>
    //     <p>
    //       {status} {company && <span> at {company}</span>}
    //     </p>
    //     <p className='my-1'>{location && <span>{location}</span>}</p>
    //     <Link to={`/profile/${_id}`} className='btn btn-primary'>
    //       View Profile
    //     </Link>
    //   </div>
    // </div>

    <div className='profile-card'>
      <img src={avatar} alt='sabbir' />
      <h1>{name}</h1>

      <p className='title'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p className=''>{location && <span>{location}</span>}</p>

      <p className='profile-btn '>
        <Link to={`/profile/${_id}`}>View Profile</Link>
      </p>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Profile;
