import logoPageNotFound404 from "./errore-404.jpg";
import { Container , Row , Col } from "react-bootstrap";

export default function NotFound () {


    return (
        
        <Container className="container bg-light">
            <Row>
                <Col className='d-flex flex-column align-items-center justify-content-center'>
                    <img className='img-fluid' src={logoPageNotFound404} alt="immage_404"/>
                </Col>
            </Row>
        </Container>
    )
}