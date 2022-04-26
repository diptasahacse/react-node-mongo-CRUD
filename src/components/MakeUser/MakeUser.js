import React from 'react';

const MakeUser = ({ user }) => {
    const { name, email } = user;
    return (
        <div className='col-lg-4 col-md-2 col-1'>
            <div className='border p-2 rounded justify-content-between d-flex align-items-center'>
                <div>
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>
                <button className='btn btn-sm btn-danger'>Remove</button>
            </div>

        </div>
    );
};

export default MakeUser;