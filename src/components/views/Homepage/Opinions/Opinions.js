import React from 'react';
import styles from './Opinions.module.scss';
import { Container } from 'react-bootstrap';
import { Carousel, Stack, Card } from 'react-bootstrap';


const Opinions = () => {
  return (
    <div className={styles.root}>
      <Container>
        <h2 className={styles.title}>What our clients say:</h2>
        <Carousel controls={false} touch={true}>
          <Carousel.Item className={styles.item}>
            <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={3}>
              <Card style={{ width: "33%"}}>
                <Card.Body className={styles.card_body}>
                  <Card.Text className={styles.card_text}>
                    Amazing. This was my first try of a shampoo bar. I am totally blown away by it. Have just ordered another!
                  </Card.Text>
                  <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                    <img src="/images/persons/Bradley_Robinson.jpg" alt="Third slide"/>
                    </div>
                    <div className={styles.person}><h3>Bradley<br/>Robinson</h3></div>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: "33%" }}>
                <Card.Body className={styles.card_body}>
                  <Card.Text className={styles.card_text}>
                  Delicate fragrance, no dyes. Good ankle shape - fits well in the hand, does not slip. The best soap I've ever used.
                  </Card.Text>
                  <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                    <img src="/images/persons/Christina_Smith.jpg" alt="Third slide"/>
                    </div>
                    <div className={styles.person}><h3>Christina<br/>Smith</h3></div>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: "33%" }}>
                <Card.Body className={styles.card_body}>
                  <Card.Text className={styles.card_text}>
                  One of the few soaps that does not dry out, does not leave a residue on the sink, and at the same time cleans effectively and smells beautiful.
                  </Card.Text>
                  <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                    <img src="/images/persons/Kaitlynn_McLeod.jpg" alt="Third slide"/>
                    </div>
                    <div className={styles.person}><h3>Kaitlynn<br/>McLeod</h3></div>
                  </div>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
          <Carousel.Item className={styles.item}>
            <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={3}>
              <Card style={{ width: "33%" }}>
                <Card.Body className={styles.card_body}>
                  <Card.Text className={styles.card_text}>
                  Excellent soap. It does not dry out the skin. Used for washing the whole body and hair. I recommend.
                  </Card.Text >
                  <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                    <img src="/images/persons/Luca_Clark.jpg" alt="Third slide"/>
                    </div>
                    <div className={styles.person}><h3>Luca<br/>Clark</h3></div>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: "33%" }}>
                <Card.Body className={styles.card_body}>
                  <Card.Text className={styles.card_text}>
                  Just soap. Nothing else. No unnecessary chemistry. Only the one for washing and moisturizing the body.
                  </Card.Text>
                  <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                    <img src="/images/persons/Meghan_Healy.jpg" alt="Third slide"/>
                    </div>
                    <div className={styles.person}><h3>Meghan<br/>Healy</h3></div>
                  </div>
                </Card.Body>
              </Card>
              <Card style={{ width: "33%" }}>
                <Card.Body className={styles.card_body}>
                  <Card.Text className={styles.card_text}>
                  It does not irritate the skin and does not sensitize. The soap was good at moisturizing my dry skin. It foams very well and is efficient.
                  </Card.Text>
                  <div className={styles.wrapper}>
                    <div className={styles.img_wrapper}>
                    <img src="/images/persons/Octavio_Sparks.jpg" alt="Third slide"/>
                    </div>
                    <div className={styles.person}><h3>Octavio<br/>Sparks</h3></div>
                  </div>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};


export default Opinions;