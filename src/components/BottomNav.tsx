import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaExchangeAlt,
  FaTools,
  FaUsers,
  FaDollarSign,
  FaRocket,
} from "react-icons/fa";
import "../BottomNav.css"; // Add any custom styles here

function BottomNav() {
  const [activeKey, setActiveKey] = useState("/exchange");

  const items = [
    { key: "/exchange", icon: <FaExchangeAlt />, label: "Exchange" },
    { key: "/mine", icon: <FaTools />, label: "Mine" },
    { key: "/friends", icon: <FaUsers />, label: "Friends" },
    { key: "/earn", icon: <FaDollarSign />, label: "Earn" },
    { key: "/airdrop", icon: <FaRocket />, label: "Airdrop" },
  ];

  return (
    <Container className="bottom-nav rounded mb-3">
      <Row>
        {items.map((item) => (
          <Col key={item.key} className="text-center">
            <Card
              className={`nav-card ${activeKey === item.key ? "active" : ""}`}
              onClick={() => setActiveKey(item.key)}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                {item.icon}
                <div>{item.label}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BottomNav;
