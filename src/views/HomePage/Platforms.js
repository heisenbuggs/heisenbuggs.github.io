import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {
  Col,
  Container,
} from 'react-bootstrap';

import githubFill from '@iconify-icons/akar-icons/github-fill';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import leetcodeIcon from '@iconify-icons/cib/leetcode';
import codechefIcon from '@iconify-icons/simple-icons/codechef';
import geeksforgeeksIcon from '@iconify-icons/simple-icons/geeksforgeeks';
import { Icon } from '@iconify/react';

const Platforms = () => {
  return (
    <Container className="platformcont">
      <Col>
        <ul className="home-platforms-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/heisenbuggs"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="GitHub"
            >
              <Icon
                icon={githubFill}
                height={48}
                width={47}
                style={{ marginTop: 3 }}
              />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://leetcode.com/heisenbuggs/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="LeetCode"
            >
              <Icon
                icon={leetcodeIcon}
                height={48}
                width={45}
                style={{ marginTop: 3 }}
              />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/prasuksjain/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="LinkedIn"
            >
              <Icon
                icon={linkedinFill}
                height={52}
                width={40}
              />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://auth.geeksforgeeks.org/user/heisenbuggs/practice/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="GeeksforGeeks"
            >
              <Icon
                icon={geeksforgeeksIcon}
                height={48}
                width={42}
                style={{ marginTop: 6 }}
              />
            </a>
          </li>
        </ul>
      </Col>
    </Container>
  );
};

export default Platforms;
