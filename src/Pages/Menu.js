import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { db } from '../Config/Firebase';
import { Deleteorder } from '../Redux/Action/Book.action';

const Menu = () => {

    const Menu = useSelector((Menu)=> Menu.BookOrderr.orderdata)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [data, setdata] = useState()

    const onDeletehandler=(id)=>{
        dispatch(Deleteorder(id))
        alert("HII");     
    }

    const onclickEdit = (event) =>{
        navigate(`/editBooktable/${event}`)
    }

    // useEffect(() => {    
    //     getData()
    // }, [])
    

    // const getData = async  () =>{
    //     const res = await getDocs(collection(db,'orders'))
    //     console.log("RESPONSE",res);
    //     const orderList = []
    //     res.forEach((i)=>{
    //         orderList.push({id : i.id,...i.data()})
    //     })

    //     setdata(orderList)
    // }


    console.log("MENU",Menu);
    
    return (
        <div>
            <div>

                {/* ======= Menu Section ======= */}
                <section id="menu" className="menu section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Menu</h2>
                            <p>Check Our Tasty Menu</p>
                        </div>
                        <div className="row" data-aos="fade-up" data-aos-delay={100}>
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="menu-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-starters">Starters</li>
                                    <li data-filter=".filter-salads">Salads</li>
                                    <li data-filter=".filter-specialty">Specialty</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row menu-container" data-aos="fade-up" data-aos-delay={200}>
                            {Menu?.map((i) => {
                                return (    
                                    <div className="col-lg-6 menu-item filter-starters">
                                        <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt />
                                        <div className="menu-content">
                                            <span>{i.name}</span>
                                            <span>${i.email}</span>
                                        </div>
                                        <div className="menu-ingredients">
                                            {i.phone}
                                        </div>
                                        <div>
                                            <button className='btn btn-danger' onClick={()=> onDeletehandler(i.id)}>Delete</button>
                                            <button className='ms-3 btn btn-success' onClick={()=> onclickEdit(i.id)}>Edit</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section id="why-us" className="why-us">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Why Us</h2>
                            <p>Why Choose Our Restaurant</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                                    <span>01</span>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                                    <span>02</span>
                                    <h4>Repellat Nihil</h4>
                                    <p> Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                                    <span>03</span>
                                    <h4> Ad ad velit qui</h4>
                                    <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Why Us Section */}
            </div>

        </div>
    )
}

export default Menu
