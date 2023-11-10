import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import js from '../assets/img/js.svg';
import python from '../assets/img/python.svg';
import react from '../assets/img/react.svg';
import java from '../assets/img/java.svg';
import bootstrap from '../assets/img/bootstrap.svg';
import git from '../assets/img/git.svg';
import firebase from '../assets/img/firebase.svg';
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col} from 'react-bootstrap';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomin">
                            <h2>
                                Skills and Frameworks
                            </h2>
                            <p>Skills are the building blocks of a developer's toolkit. In this section, I showcase my proficiency in a wide range of programming languages, frameworks, and tools that empower me to create innovative and efficient solutions.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={python} alt="" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={html} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt="" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={firebase} alt="" />
                                    <h5>Firebase</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}