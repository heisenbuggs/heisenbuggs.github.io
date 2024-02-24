import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import { Col } from 'react-bootstrap';

const Techstack = (prop) => {
  // Do not want to remove the hover functionality  
  // and hence just changing icon name
  const [hover, setHover] = useState(false);
  return (
    <div>
      <Col
        xs={3}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setHover(false)} // set this as true to enable hover effect
        onMouseLeave={() => setHover(false)}
      >
        {(!hover || !prop.hoverIcon) && (
          <i className={`${prop.iconName} tech-icon-images`}></i>
        )}
        {hover && prop.hoverIcon && (
          <i className={`${prop.hoverIcon} tech-icon-images`}></i>
        )}
      </Col>
    </div>
  );
};

export default Techstack;
