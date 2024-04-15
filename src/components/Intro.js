import { Col, Container, Row, Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import '../style/IntroAnimation.css'; // Pastikan file ini ada atau path-nya benar

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">SAT SET TANPA KARCIS</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const IntroAnimation = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate'); // Hapus tanda + yang tidak perlu
  }, []);

  return (
    <>
      <div className={`title ${animationClass}`}>NONTON GRATIS</div>
      <div className={`title ${animationClass}`}>SAT SET TANPA KARCIS</div>
    </>
  );
};

export { IntroAnimation };

export default Intro;