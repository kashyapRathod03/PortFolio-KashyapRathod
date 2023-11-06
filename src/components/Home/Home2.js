import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import workexp from "../../Assets/home-main.svg";
import heackathon from "../../Assets/heackathon.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Certificate from "./Certificate";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="purple"> PRESENT </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've developed a deep affection for programming and managed to acquire some knowledge along the way, or so I hope... 🤷‍♂️
              <br />
              <br />I'm proficient in timeless languages such as
              <i>
                <b className="purple"> C++, Javascript, PHP, and Python. </b>
              </i>
              <br />
              <br />
              My primary interests revolve around creating innovative &nbsp;
              <i>
                <b className="purple">web technologies and products </b> as
                well as delving into the realm of{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever the opportunity arises, I channel my enthusiasm into crafting products using
              <b className="purple"> Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js </b>
              </i>
              <br />
              <br />
              Additionally, I possess solid expertise in
              <b className="purple"> Python</b> with
              <i>
                <b className="purple">
                  {" "}
                  the Django framework
                </b>
              </i>
              &nbsp; and
              &nbsp;
              <i>
                <b className="purple">
                  {""}
                  PHP web application development.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* ..................................................................................................................... */}
        <hr />
        <h1 style={{ fontSize: "2.6em", color: "white", paddingTop: 70 }}>
          My <span className="purple"> Work EXPERIENCE </span> In Development
        </h1>

        <Row style={{ paddingBottom: 20, paddingTop: 0 }}>
          <Col md={5} style={{ paddingBottom: 0, paddingTop: 0 }}>
            <img
              src={workexp}
              alt="home pic"
              className="img-fluid"
              style={{ height: "450px", width: "1000px" }}
            />
          </Col>
          <Col md={7} className="home-about-description">
            <h3 style={{ fontSize: "1.6em", padding: 20 }}>
              EXPERIENCE: <span className="purple"> 1 </span>
            </h3>
            <h3 style={{ fontSize: "1.2em" }}>
              Role: <span className="purple"> MERN STACK Developer </span>
            </h3>
            <h3 style={{ fontSize: "1.2em" }}>
              Comapany: <span className="purple"> AdSum Originator LLP </span>
            </h3>

            {/* <p className="home-about-body"> */}
            I Worked on live project module and also done projects, frontend part of website using React Js and also created CMS using Node js and MongoDB
            <br />
            <br />I'm proficient in timeless languages such as
            <i>
              <b className="purple"> Javascript, RactJs, NodeJs and ExpressJs. </b>
            </i>
            <br />
            <br />
          </Col>

        </Row>

        {/* ..................................................................................................................... */}

        <hr />
        <h1 style={{ fontSize: "2.6em", color: "white", paddingTop: 70 }}>
          BIG<span className="purple"> ACHIEVEMENTS </span>
        </h1>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Runner's up </span>in Full Stack web hackathon
            </h1>
            {/* <p className="home-about-body"> */}
            I achieved the Runner-Up position in my college's
            <br />
            <i>
              <b className="purple"> Full Stack Web Hackathon </b>
            </i>
            by excelling in a series of challenging tasks. My performance showcased my ability to tackle complex web development challenges and work effectively as part of a collaborative team, demonstrating my proficiency in full-stack web development
            <br />
            <br />
          </Col>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={heackathon}
              alt="home pic"
              className="img-fluid"
              style={{ height: "450px", width: "800px" }}
            />
          </Col>
        </Row>


        {/* ..................................................................................................................... */}

       <Certificate/>

        {/* ..................................................................................................................... */}

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kashyapRathod03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Kashyap22769120"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kashyap-rathod-90620b25a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_.kashyap_.rathod._/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
