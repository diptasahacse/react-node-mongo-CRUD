import React, { useEffect, useState } from 'react';
import MakeUser from '../MakeUser/MakeUser';

const AllUsers = () => {
    const [allUsers, setAllUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setAllUsers(data))
    },[])
    return (
        <div className='pb-5'>
            <div className='row g-4'>
                {
                    allUsers.map(user => <MakeUser key={user._id} setAllUsers={setAllUsers} allUsers={allUsers} user={user}></MakeUser>)
                }
            </div>
            
        </div>
    );
};

export default AllUsers;