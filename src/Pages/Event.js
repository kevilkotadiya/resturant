import React ,{useReducer} from 'react'

const Event = () => {

    const intialstate = {
        count : 0
    }

    const reducer = (state,action) =>{

        if(action.type === 'INCREMENT')
        {
            return{...state,count : state.count + 1}
        }

        if(action.type === 'DECREMENT'){

            return{...state , count : state.count - 1}

        }
        console.log("STATE",state);
        return state
    }

    const [state, dispatch] = useReducer(reducer,intialstate)
    const onclickInr = () =>{
        dispatch({type : 'INCREMENT'})
    }

    const onclickDec = () => {
        dispatch({type : 'DECREMENT'})
    }


    


    return (
        <div>
            <div>
                <section id="specials" className="specials">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Specials</h2>
                            <p>Check Our Specials</p>
                        </div>
                        <div className="row" data-aos="fade-up" data-aos-delay={100}>
                            <div className="col-lg-3">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9 mt-4 mt-lg-0">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Architecto ut aperiam autem id</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-1.png" alt className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Et blanditiis nemo veritatis excepturi</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-2.png" alt className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-3">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                                <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-3.png" alt className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-4">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                                <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                                <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-4.png" alt className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-5">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                                <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                                <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-5.png" alt className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <button onClick={onclickInr} className='btn btn-danger'>+</button>
                        {state.count}
                        <button onClick={onclickDec} className='btn btn-primary'>-</button>
                    </div>
                </section>
                <section id="events" className="events">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Events</h2>
                            <p>Organize Your Events in our Restaurant</p>
                        </div>
                        <div className="events-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img src="assets/img/event-birthday.jpg" className="img-fluid" alt />
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Birthday Parties</h3>
                                            <div className="price">
                                                <p><span>$189</span></p>
                                            </div>
                                            <p className="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img src="assets/img/event-private.jpg" className="img-fluid" alt />
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Private Parties</h3>
                                            <div className="price">
                                                <p><span>$290</span></p>
                                            </div>
                                            <p className="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img src="assets/img/event-custom.jpg" className="img-fluid" alt />
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Custom Parties</h3>
                                            <div className="price">
                                                <p><span>$99</span></p>
                                            </div>
                                            <p className="fst-italic">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua.
                                            </p>
                                            <ul>
                                                <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i className="bi bi-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i className="bi bi-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                            </ul>
                                            <p>
                                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                velit esse cillum dolore eu fugiat nulla pariatur
                                            </p>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Event
