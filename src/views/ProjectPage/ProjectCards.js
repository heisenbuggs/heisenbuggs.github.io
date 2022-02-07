import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        style={{ maxHeight: 170 }}
        src={props.imgPath}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Footer>
          <Button variant="primary" href={props.link} target="_blank">
            <i className="cil-external-link">&nbsp;</i>
            {"View Project"}
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
export default ProjectCards;
