import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={url} target="__blank"><img src={imgUrl} /></a>
                <div className="proj-txtx">
                    <a href={url} target="__blank" style={{textDecoration: 'none', color: 'white'}}><h4>{title}</h4></a>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}