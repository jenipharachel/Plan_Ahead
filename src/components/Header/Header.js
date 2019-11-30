import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Header.css";

const Header = () => (
  <Container>
    <Row>
      <Col sm={{ size: 6, offset: 3 }}>
        <h1 className="apptitle">
          <i className="fas fa-clipboard-list"></i> Plan ahead
        </h1>
      </Col>
    </Row>
  </Container>
);

export default Header;
