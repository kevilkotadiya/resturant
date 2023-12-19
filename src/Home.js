import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Aproduct from './Aproduct'
import Table from 'react-bootstrap/Table';
import EditProduct from './EditProduct';

const Home = () => {

    const [display, setdisplay] = useState(false)
    const [ProductList, setProductList] = useState([])    
    const [EditDisplay, setEditDisplay] = useState(false)
    const [EditData, setEditData] = useState([])

    useEffect(() => {
        setProductList(JSON.parse(localStorage.getItem('Product')) || [])
    }, [display,EditDisplay])

    console.log('EDITD',display );
    const onclickOpen = () => {
        setdisplay(true)
    }

    const onclickDelete = (event) =>{
        const filter = ProductList.filter((i)=>{
            return i.id !== event
        })
        setProductList(filter)
        localStorage.setItem('Product',JSON.stringify(filter))
    }

    const onclickEdit = (event)=>{
        console.log("DATA",event)
        setEditData(event)
        setEditDisplay(true)
    }

    return (
        <div>
            <Aproduct ADDDisplay={display} setADDDisplay={setdisplay} />
            <EditProduct EditDisplay={EditDisplay} setEditDisplay={setEditDisplay} EditData={EditData}/>
            <Button onClick={onclickOpen}>Open Modal</Button>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductList?.map((i) => {
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.price}</td>
                                <td><img alt='ProductImage' src={i.url} width='100px' height='100px'/></td>
                                <td>
                                    <Button variant="outline-danger"  className='me-3' onClick={()=>onclickDelete(i.id)}>Delete</Button>
                                    <Button variant="outline-success" onClick={()=>onclickEdit(i)}>Edit</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div >
    )
}

export default Home
