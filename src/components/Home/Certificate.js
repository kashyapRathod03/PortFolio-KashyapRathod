import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import coursera from "../../Assets/coursera.png";
import duke from "../../Assets/certificate/duke.png";
import michigan from "../../Assets/certificate/michigan.png";
import adsum from "../../Assets/certificate/adsum.jpg";
import yonsei from "../../Assets/certificate/yonsei.png";
import acm from "../../Assets/certificate/acm-hackthon.png";
import linkedin from "../../Assets/certificate/linkedin.png";
import upwork from "../../Assets/certificate/upwork.jpg";
function Certificate() {
  return (
    <>
         <Row>
          <Col md={12} className="home-about-social" style={{paddingBottom:60}}>
            <h1>ALL CERTIFICATES </h1>
            <p style={{paddingBottom:40}}>
              This is my <span className="purple"> Proof Of Work </span>
            </p>
            <ul className="home-about-social-links" style={{paddingTop:40}}>
              <li className="social-icons">
                <a
                  href="https://coursera.org/share/b93dc6d30cfed8c87b7890ed43a28122"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={duke}
                    alt="home pic"
                    className="img-fluid certificate-img"
                  />
                </a>
                Javascript...
              </li>
              <li className="social-icons">
                <a
                  href="https://coursera.org/share/e28e86b02f9c85351bea913d39be9a74"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={michigan}
                    alt="home pic"
                    className="img-fluid certificate-img"
                  />
                </a>SQL...
              </li>
              <li className="social-icons">
                <a
                  href="https://coursera.org/share/3db097f441dbc91c02c74cb6c9af2716"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={coursera}
                    alt="home pic"
                    className="img-fluid certificate-img"
                  />
                </a>
                JavaPro...
              </li>
              <li className="social-icons">
                <a
                  href="https://coursera.org/share/885fd24d6b8fdd26e724861050cd9c0f"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={yonsei}
                    alt="home pic"
                    className="img-fluid certificate-img"
                  />
                </a>
                Tcp/Ip...
              </li>
              <li className="social-icons">
                <a
                  href="https://drive.google.com/file/d/1DYAFMqM3G8LpGBK3x9Kloi7k1xHz1MZQ/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={adsum}
                    alt="home pic"
                    className="img-fluid certificate-img"
                  />
                </a>
                InternShip
              </li>
              <li className="social-icons">
                <a
                  href="https://drive.google.com/file/d/1SCQ7qY-UBtOLDM8FLjp55V0pWvBnr8Lb/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={acm}
                    alt="home pic"
                    className="img-fluid certificate-img"
                  />
                </a>
                Hackathon
              </li>
              
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social" style={{paddingBottom:60}}>
            <h1>ALL SERVICES </h1>
            <p style={{paddingBottom:40}}>
            These are the platforms where I offer my services, such as Upwork and LinkedIn. 
            </p>
            <ul className="home-about-social-links" style={{paddingTop:40}}>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/services/page/714780325b52778431/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="home pic"
                    className="img-fluid certificate-img"
                  />
                </a>
                ServicesPage
              </li>  
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~01287396ca26d0e213"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={upwork}
                    alt="home pic"
                    className="img-fluid certificate-img"
                  />
                </a>
                UpworkProfile
              </li>             
            </ul>
          </Col>
        </Row>
    </>
  )
}

export default Certificate
