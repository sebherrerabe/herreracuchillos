import Video1 from '../assets/videos/1.mp4';

const Header = () => {
    return (
        <header
            className="masthead">
            <div className="intro-body">
                <video autoPlay loop muted >
                    <source src={Video1} type="video/mp4" />
                </video>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h1 className="brand-heading">Lo rustico hecho elegante</h1>
                            <p className="intro-text">
                                A free, responsive, one page Bootstrap theme.<br />Created with
                                love.
                            </p>
                            <a className="btn btn-link btn-circle" role="button" href="#about"
                            ><i className="fa fa-angle-double-down animated"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;

/* <video autoPlay loop muted >
                <source src={Video1} type="video/mp4" />
            </video> */

/* <header
    className="masthead"
    style={{ backgroundImage: "url('assets/img/downloads-bg.jpg')" }}>
    <div className="intro-body">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h1 className="brand-heading">grayscale</h1>
                    <p className="intro-text">
                        A free, responsive, one page Bootstrap theme.<br />Created with
                        love.
                    </p>
                    <a className="btn btn-link btn-circle" role="button" href="#about"
                    ><i className="fa fa-angle-double-down animated"></i></a>
                </div>
            </div>
        </div>
    </div>
</header> */