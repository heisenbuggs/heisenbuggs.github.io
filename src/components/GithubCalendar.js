import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
  const colourTheme = {
    light : ["#ecd9fc", "#d292f3", "#b246ea", "#9a19dc", "#8115b9"],
    dark : ["#ecd9fc", "#d292f3", "#b246ea", "#9a19dc", "#8115b9"]
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="heisenbuggs"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
};

export default Github;
