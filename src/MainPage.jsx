import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Download from './components/Download.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

import './bootstrap/bootstrap.min.css';
import './bootstrap/Header.css';



const MainPage = () => {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <Download />
            <Contact />
            <Footer />
        </>
    );
}

export default MainPage;