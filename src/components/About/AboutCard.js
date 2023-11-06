import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kashyap Rathod </span>
            from <span className="purple"> Surat, India.</span>
            <br /> I am a Pre-final year student pursuing an Integrated B.Tech
            in <span className="purple"> Computer Engineering.</span> 
            <br />
            I completed an internship as a full-stack developer at AdSum Originator LLP.
            <br />
            I am currently interning at CodeSoft as a web developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Explore Domains
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Your potential for greatness is limitless; unlock it."{" "}
          </p>
          <footer className="blockquote-footer">Kashyap</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
