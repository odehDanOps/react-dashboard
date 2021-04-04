
import React from "react";
import moment from "moment-timezone";
import { Row, Col, Card, OverlayTrigger, Tooltip, Image, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faDownload, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Routes } from "../routes";

export default (props) => {
  const currentYear = moment().get("year");

  return (
    <div>
      <footer className="footer section py-12">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © 2019-{`${currentYear} `}
              <Card.Link href="https://optimesoft.com" target="_blank" className="text-blue text-decoration-none fw-normal">
                Optimesoft
            </Card.Link>
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://optimesoft.com/about" target="_blank">
                  About
              </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://optimesoft.com/themes" target="_blank">
                  Themes
              </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://optimesoft.com/blog" target="_blank">
                  Blog
              </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://optimesoft.com/contact" target="_blank">
                  Contact
              </Card.Link>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
