import { Container, Row, Col } from "react-bootstrap";
import { FaCog } from "react-icons/fa";

function TopBar() {
  return (
    <Container fluid className="top-bar">
      <Row>
        <Col xs={6} className="d-flex align-items-center">
          <img src="path-to-avatar" alt="Avatar" className="avatar" />
          <div>
            <h5>Kristoffer (CEO)</h5>
            <p>Epic 6/11</p>
          </div>
        </Col>
        <Col xs={6} className="text-right">
          <div className="profit-info">
            <span className="profit-icon">K</span>
            <span>Profit per hour</span>
            <span className="profit-amount">+982.16K</span>
            <FaCog className="settings-icon" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TopBar;
