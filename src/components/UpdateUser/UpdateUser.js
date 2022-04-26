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
    

    const handleUpdateUser = (event)=>{
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const updateUser = {
            name,
            email
        }

        fetch(`http://localhost:5000/users/${userId}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateUser)

        })
        .then(res => res.json())
        .then(data => {
            event.target.reset()
            console.log(data)
            
        })

    }
    
    return (
        <Container>
            <h3>Update User</h3>
            <div>
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
            </div>
            <div  className='w-75 mx-auto'>
                <Form onSubmit={handleUpdateUser}>
                    <Form.Group className="mb-3" controlId="formBasicUpdateName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUpdateEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Email" />
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