import React from "react";
import {Accordion, Card, Button} from "react-bootstrap";

export default function About() {
  return (
      <div className="container mt-3">
        <h1>About Us</h1> 
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Analyze your text
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>TextUtility gives you a way to analyze your text quickly and efficiently. Be it word count, character count or</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Free to use
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>TextUtility is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtility reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Browser Compatible
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
  );
}
