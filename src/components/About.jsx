import { Container, Row, Col } from 'react-bootstrap';


const About = () => {
    return (
        <section className="text-center content-section" id="about">
            <Container>
                <Row>
                <Col lg="8" className='mx-auto'>
                        <h2>About grayscale</h2>
                        <p>
                            Grayscale is a free Bootstrap theme. It can be yours right now,
                            simply download the template on&nbsp;<a href="/">the preview page</a>. The theme is open source, and you can use it for any purpose,
                            personal or commercial.
                        </p>
                        <p>
                            This theme features stock photos by&nbsp;<a href="/">Gratisography</a>&nbsp;along with a custom Google Maps skin courtesy of&nbsp;<a
                                href="/"
                            >Snazzy Maps</a>.
                        </p>
                        <p>
                            Grayscale includes full HTML, CSS, and custom JavaScript files
                            along with SASS and LESS files for easy customization!
                        </p>
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;