import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className="text-center content-section" id="contact">
            <Container>
                <Row>
                    <Col lg="8" className='mx-auto'>
                        <h2>Contact us</h2>
                        <p>
                            Feel free to leave us a comment on the<a href="/"
                            >&nbsp;Grayscale template overview page</a>
                            &nbsp;to give some feedback about this theme!
                        </p>
                        <ul className="list-inline banner-social-buttons">
                            <li className="list-inline-item">
                                &nbsp;<Button
                                    variant="primary"
                                    size="lg"
                                    className='btn-default'>
                                    <i className="fa fa-google-plus fa-fw"></i>
                                    <span className="network-name">&nbsp; Google+</span>
                                </Button>
                            </li>
                            <li className="list-inline-item">
                                &nbsp;<Button
                                    variant="primary"
                                    size="lg"
                                    className='btn-default'
                                >
                                    <i className="fa fa-twitter fa-fw"></i>
                                    <span className="network-name">&nbsp;Twitter</span>
                                </Button>
                            </li>
                            <li className="list-inline-item">
                                &nbsp;<Button
                                    variant="primary"
                                    size="lg"
                                    className='btn-default'
                                >
                                    <i className="fa fa-github fa-fw"></i>
                                    <span className="network-name">&nbsp;github</span>
                                </Button>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </section>

    )
}

export default Contact;