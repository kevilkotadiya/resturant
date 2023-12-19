import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Aproduct({ ADDDisplay, setADDDisplay }) {

    const handleClose = () => setADDDisplay(false);

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const ProductData = {
            // id : new Date().getTime(),
            name: event.target.name.value,
            email: event.target.email.value,
            price: event.target.price.value,
            url: event.target.url.value
        }

        console.info("DATA ++ ", ProductData);

        if (localStorage.getItem('Product')) {
            const Pdata = JSON.parse(localStorage.getItem('Product'))
            Pdata.push(ProductData)
            localStorage.setItem('Product',JSON.stringify(Pdata))
        }
        else{
            const ProductArray = JSON.stringify([ProductData])
            localStorage.setItem('Product',ProductArray)
        }
        handleClose()
    }

    return (
        <>
            <Modal show={ADDDisplay} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="name"
                                autoFocus
                                name='name'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                autoFocus
                                name='email'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control
                                type="number"
                                autoFocus
                                name='price'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                name='url'
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type='submit'>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Aproduct