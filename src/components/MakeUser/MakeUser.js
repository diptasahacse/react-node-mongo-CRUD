import React from 'react';

const MakeUser = ({ user }) => {
    const { name, email } = user;
    return (
        <div className='col-lg-3 col-md-4 col-1'>
            <div className='border p-2 rounded'>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>

        </div>
    );
};

export default MakeUser;