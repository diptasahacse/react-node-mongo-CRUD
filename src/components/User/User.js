import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import AllUsers from '../AllUsers/AllUsers';

const User = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const handleAddUser = event => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const user = {
            name,
            email
        }


        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data => {
            event.target.reset()
            console.log(data)
        })

    }
    return (
        <Container>
            <h2>Add User</h2>
            <div className='w-75 mx-auto'>
                <Form onSubmit={handleAddUser}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add User
                    </Button>
                </Form>
            </div>
            <h2>All Users</h2>
            <AllUsers></AllUsers>

        </Container>
    );
};

export default User;