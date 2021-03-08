import React from 'react';

export const Card = ({ data }) => {
  const { first_name, email, gender, id } = data;
  return (
    <div>
      <div className='card border border-success bg-light'>
        <div className='card-body text-center'>
          <h5 className='card-title'>User Info</h5>
          <p>{id}</p>
          <p className='card-text'>Name: {first_name}</p>
          <p className='card-text'>Email: {email}</p>
          <p className='card-text'>Gender: {gender}</p>
        </div>
      </div>
    </div>
  );
};
