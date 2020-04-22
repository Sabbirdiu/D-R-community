import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './ProfileEducation.css';

const ProfileEducation = ({
  education: {
    college,
    univarsity,
    fieldofstudy,
    current,
    to,
    from,
    description,
  },
}) => {
  return (
    <div>
      {/* <h3 className='text-dark'>{college}</h3> */}
      <p>
        <strong>college:</strong>
        {college}
      </p>

      <p>
        <strong>univarsity:</strong>
        {univarsity}
      </p>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment>-{''}
        {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
      </p>
      <p>
        <strong>field of study:</strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description:</strong>
        {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
