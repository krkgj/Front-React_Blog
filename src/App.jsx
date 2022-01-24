import { Row, Col, Container } from "react-bootstrap";
import Main from "pages/Main";
function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={6}>1 of 1</Col>
        <Col xs={6}>2 of 1</Col>
        <Col xs={12}>
          <Main></Main>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
