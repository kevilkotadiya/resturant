import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Users } from '../Redux/Action/Users.action';
// import { Nchefs } from '../Redux/Action/Nchefs.action';
import UsersReducer from '../Redux/Reduce/Users.reduce';

const Chefs = () => {

    const UserData = useSelector((data) => data.UsersReducer.Userdata.users)

    console.log("UserData", UserData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Users())
    }, [])

    // console.log("RESDATA", Resdata);


    // const getData = async () => {
    //     const resspon = await fetch('https://dummyjson.com/users')
    //     const res = await resspon.json()
    //     setResdata(res.users)
    // }


    return (
        <div>
            <section id="chefs" className="chefs">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Chefs</h2>
                        <p>Our Proffesional Chefs</p>
                    </div>
                    <div className="row">
                        {UserData?.map((i) => {
                            return (
                                <div className="col-lg-4 col-md-6">
                                    <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                                        <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>{i.firstName}</h4>
                                                <span>{i.lastName}</span>
                                            </div>
                                            <div className="social">
                                                <a href><i className="bi bi-twitter" /></a>
                                                <a href><i className="bi bi-facebook" /></a>
                                                <a href><i className="bi bi-instagram" /></a>
                                                <a href><i className="bi bi-linkedin" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>
            </section>
        </div>

    )
}

export default Chefs
