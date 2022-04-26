import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    const nameRef = useRef('')
    const emailRef = useRef('')
    const {userId} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    console.log(user)

    const handleUpdateUser = ()=>{

    }
    
    return (
        <Container>
            <h3>Update User</h3>
            <div  className='w-75 mx-auto'>
                <Form onSubmit={handleUpdateUser}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control ref={nameRef} value={user?.name} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={emailRef}  value={user?.email} type="email" placeholder="Email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Update User
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default UpdateUser;