import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import {BookOrder, Editorder}  from '../Redux/Action/Book.action';

const EditBooktable = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate()

    const {id} = useParams()
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const Data = useSelector((Data) => Data.BookOrderr?.orderdata)

    useEffect(() => {
        const value = Data.find((i) => i.id == id)
        setname(value?.name)
        setemail(value?.email)
        setphone(value?.phone)
    }, [])

    console.log("DATA",Data);


    const onsubmitHandaler = () => {
        const Edata = {
            id ,
            name: name,
            email:email,
            phone: phone,
        }
        dispatch(Editorder(Edata))
        Navigate('/menu')
    }

    const onchangeName = (event) => {
        setname(event.target.value)
    } 

    const onchangeEmail = (event )=>{
        setemail(event.target.value)
    }

    const onchangePhone = (event) => {
        setphone(event.target.value)
    }


    return (
        <div>
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>UpaDate a Table</p>
                    </div>
                    <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 form-group">
                                <input type="text" value={name} onChange={onchangeName} name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" value={email} onChange={onchangeEmail} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input type="text" value={phone} onChange={onchangePhone} className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate" />
                            </div>
                            <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                        </div>
                        <div className="text-center"><button onClick={onsubmitHandaler} className='submit'  type="button">Upadte a Table</button></div>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default EditBooktable
