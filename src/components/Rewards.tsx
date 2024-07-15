import { Container, Row, Col, Card } from "react-bootstrap";

function Rewards() {
  const rewards = [
    { name: "Daily reward", time: "08:18" },
    { name: "Daily cipher", time: "03:18" },
    { name: "Daily combo", time: "20:18" },
  ];

  return (
    <Container className="rewards">
      <Row>
        {rewards.map((reward, index) => (
          <Col key={index} xs={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{reward.name}</Card.Title>
                <Card.Text>{reward.time}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Rewards;
