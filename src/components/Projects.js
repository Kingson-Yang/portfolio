import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Instagram Clone",
            description: "Made with React and Firebase",
            imgUrl: projImg1,
            url: 'https://github.com/Kingson-Yang/Instagram-Clone',
        },

        {
            title: "Hair Day Website",
            description: "Made with HTML, CSS, Javascript",
            imgUrl: projImg2,
            url: 'https://github.com/Kingson-Yang/Website',
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>My Projects section is a vibrant showcase of my practical experience and creative problem-solving abilities as a developer. It provides an in-depth look at my past work, featuring a collection of projects I've completed. Each project in this section comes with a snapshot, information about the technologies and tools I used as well as links to the projects themselves. </p>
                                    <Tab.Container id="projects-tabs">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}