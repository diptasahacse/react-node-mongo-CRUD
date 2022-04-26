import React from 'react';
import { useNavigate } from 'react-router-dom';

const MakeUser = ({ user, setAllUsers, allUsers }) => {
    const navigate =useNavigate();
    const { _id, name, email } = user;
    const userDeleteListener = (_id) => {
        const proceed = window.confirm('Are you sure want to delete..?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted Successfull')
                        const remaining = allUsers.filter(user => user._id !== _id)
                        setAllUsers(remaining)


                    }
                })
        }


    }
    const userUpdateListener = (_id) =>{
        navigate(`/user/${_id}`)

    }

    return (
        <div className='col-lg-6 col-1'>
            <div className='border p-2 rounded justify-content-between d-flex align-items-center'>
                <div>
                    <h4>{name}</h4>
                    <p>{email}</p>
                </div>
                <div>
                    <button onClick={() => userDeleteListener(_id)} className='btn btn-sm btn-danger me-2'>Remove</button>
                    <button onClick={() => userUpdateListener(_id)} className='btn btn-sm btn-info'>Update</button>

                </div>
            </div>

        </div>
    );
};

export default MakeUser;