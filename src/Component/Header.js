import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/ReactContext';


const Header = () => {

    const theme = useContext(Context)

    console.log("DARK", theme);

    return (
        
        <div className='Header-margin' >
            <div>
                {/* ======= Top Bar ======= */}
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
                            <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
                        </div>
                        <div className="languages d-none d-md-flex align-items-center">
                            <ul>
                                <li>English</li>
.                            </ul>
                        </div>
                    </div>
                </div>
                {/* ======= Header ======= */}
                <header id="header"  className="fixed-top d-flex  align-items-center">
                    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                        <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li><Link className="nav-link scrollto" to='/'>Home</Link></li>
                                <li><Link className="nav-link scrollto" to='/about'>About</Link></li>
                                <li><Link className="nav-link scrollto" to='/menu'>Menu</Link></li>
                                <li><Link className="nav-link scrollto" to='/event'>Events</Link></li>
                                <li><Link className="nav-link scrollto" to='/chefs'>Chefs</Link></li>
                                <li><Link className="nav-link scrollto" to='/contact'>Contact</Link></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        <Link   className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</Link>
                    </div>
                </header>{/* End Header */}
            </div>

        </div>
    )
}

export default Header
