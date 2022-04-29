import './NavBar.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';


const NavBar = () => {
    const [navClass, setNavClass] = useState(false)
    const navRef = useRef()
    navRef.current = navClass
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavClass(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Navbar ref={navRef} fixed="top" expand='md' id='mainNav' className={navClass ? "navbar-shrink" : null} collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                <Navbar.Toggle data-bs-toggle="collapse"
                    className="navbar-toggler-right"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    value="Menu" >
                    <i className="fa fa-bars"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarResponsive" >
                    <Nav className='ms-auto right'>
                        <Nav.Item>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#download">e-shop</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact">contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBar;


/* <nav className="navbar navbar-light navbar-expand-md fixed-top" id="mainNav">
            <div className="container">
                <a href="/">
                    <div className="navbar-brand"></div>
                </a>
                <button
                    data-bs-toggle="collapse"
                    className="navbar-toggler navbar-toggler-right"
                    data-bs-target="#navbarResponsive"
                    type="button"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    value="Menu"
                >
                    <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item nav-link">
                            <a className="nav-link active" href="#about">About</a>
                        </li>
                        <li className="nav-item nav-link">
                            <a className="nav-link" href="#download">e-shop</a>
                        </li>
                        <li className="nav-item nav-link">
                            <a className="nav-link" href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */