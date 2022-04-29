import { Container, Col, Button } from 'react-bootstrap';

const Download = () => {
    return (
        <section className="text-center download-section content-section"
            id="download"
            style={{ backgroundImage: "url('assets/img/downloads-bg.jpg')" }}>
            <Container>
                <Col lg="8" className='mx-auto'>
                    <h1>Download Grayscale</h1>
                    <p>You can download Grayscale for free on the preview page.</p>
                    <Button variant='primary' size='lg' className='btn-default' >
                        visit download page
                    </Button>
                </Col>
            </Container>
        </section>
    )
}

export default Download;