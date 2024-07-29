import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function CustomImage() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/384300/384350.jpg" width={250} height={250} />
        </Col>
        <Col xs={6} md={4}>
          <Image src= "https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/08/full/1662657385-7641.jpg" width={250} height={250}/>
        </Col>
        
      </Row>
    </Container>
  );
}



export default CustomImage;