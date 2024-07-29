import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard() {
  return (
    <Card style={{ width: '18rem', border:"2px solid black" }}>
      <Card.Img variant="top" src= "https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662657385-7641.jpg" width={250} height={250}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;

