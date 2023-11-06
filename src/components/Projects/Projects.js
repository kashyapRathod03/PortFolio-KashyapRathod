import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import conversa from "../../Assets/Projects/conversa.png";
import TaskXpress from "../../Assets/Projects/TaskXpress.png";
import jsdevstore from "../../Assets/Projects/jsdevstore.png";
import agroverse from "../../Assets/Projects/Agroverse.png";
import WebForumX from "../../Assets/Projects/WebForumX.png";
import talkvision from "../../Assets/Projects/talkvision.png";
import chaascode from "../../Assets/Projects/chaascode.png";
import preciouse from "../../Assets/Projects/preciouse.png";
import Textutils from "../../Assets/Projects/Textutils.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={talkvision}
              isBlog={false}
              title="TalkVision"
              description=
              "In my project, I designed and developed a cutting-edge real-time video call application tha leveraged WebRTC--Web RealTime Communication for seamless, high-quality video and audio communication.To complement this functionality, I implemented a real-time chat feature using WebSocket technology, enabling users to exchange messages instantaneously during video calls. The project architecture was built upon a robust signaling server powered by Django, which facilitated peer-to-peer connections and ensured smooth communication between users. This endeavor showcased my expertise in real-time communication technologies, web development, and server-side architecture while delivering an integrated and interactive platform for video calls and messaging"
              ghLink="https://github.com/kashyapRathod03/TalkVision"
              demoLink="/project"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agroverse}
              isBlog={false}
              title="AgroVerse"
              description=
              "I spearheaded the creation of a farmer-centric marketplace created in MERN Stack. Farmer can easily see what other's sow through bar chart's and donut chart's and cards, Also farmer can add data of products for information and also sell their prouduct to wholesaler and Wholesaler can manage their cart and buy products and making secure online payments through the Stripe gateway.Also,they can track orders."
              ghLink="https://github.com/kashyapRathod03/"
              demoLink="/project"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsdevstore}
              isBlog={false}
              title="Krira – gadgets website"
              description="In my project Krira – Gadgets Website, I created a dynamic tech gadgets platform that
              focused on delivering an exceptional user experience. I utilized a robust technology stack,
              including HTML, CSS, Bootstrap, and React JS for the frontend, and Strapi as a headless CMS to manage and serve data dynamically. The backend was powered by Firebase, providing real-time database functionality. The website seamlessly integrated user-friendly
              features, including advanced search capabilities, an efficient cart system. This project not only showcased my proficiency in web development but also highlighted my ability to
              create a user-centric interface while managing data efficiently through modern
              technologies."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="/project"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conversa}
              isBlog={false}
              title="Conversa"
              description="Introducing our cutting-edge chat application powered by the MERN stack, a robust platform that allows you to seamlessly connect with people from all around the world. With our app, you can engage in real-time conversations, share files, and exchange images effortlessly. Whether it's for personal use or professional collaboration, our intuitive and user-friendly interface ensures that you stay connected, informed, and productive. Experience the future of communication with our MERN-based chat application and elevate your conversations to a whole new level."
              ghLink="https://github.com/kashyapRathod03/CONVERSA"
              demoLink="/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebForumX}
              isBlog={false}
              title="WebForumX"
              description="Our forum website, powered by a robust combination of PHP, JavaScript, HTML, and MySQL database, provides an interactive platform for users to engage in discussions, share knowledge, and connect with like-minded individuals. With the reliability of an Apache server, our forum offers a seamless experience, allowing users to post, comment, and search for topics of interest. The MySQL database ensures efficient data management and retrieval, while the website's user-friendly interface, developed using HTML and JavaScript, makes navigation and interaction a breeze. Whether you're seeking answers, sharing your expertise, or fostering a community, our forum is the ideal online space for open and dynamic discussions."
              ghLink="https://github.com/kashyapRathod03/WebForumX"
              demoLink="/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TaskXpress}
              isBlog={false}
              title="TaskXpress"
              description="Our task management web application, powered by PHP, JavaScript, and HTML, seamlessly organizes your tasks, making productivity effortless. With a robust MySQL database backend, your data is securely stored and easily accessible. The Apache server ensures reliable performance, providing a responsive and user-friendly experience. From task creation and assignment to deadline tracking and progress updates, our application streamlines your work, enhancing collaboration and efficiency in your projects. Manage tasks with ease, and boost your productivity with our reliable and intuitive task management solution."
              ghLink="https://github.com/kashyapRathod03/TaskXpress"
              demoLink="/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chaascode}
              isBlog={false}
              title="Chaascode"
              description="Welcome to ChaasCode, your trusted destination for cutting-edge IT services and expert consultancy. At ChaasCode, we specialize in unlocking the full potential of your technology landscape. Our seasoned team of professionals is equipped to provide a wide range of services, from software development and system integration to cybersecurity solutions and cloud computing. We partner with organizations of all sizes, offering tailored strategies and implementation plans to drive innovation and achieve digital transformation. With ChaasCode, you can harness the power of technology to gain a competitive edge and navigate the ever-evolving digital landscape. Discover the possibilities with ChaasCode, where innovation meets excellence."
              ghLink="https://github.com/kashyapRathod03/Chaascode"
              demoLink="/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={preciouse}
              isBlog={false}
              title="Preciouse"
              description="Welcome to our exclusive world of Precious Clothing, where every garment is a true gem. Our e-commerce website is a haven for fashion enthusiasts seeking the epitome of style and luxury. Discover a curated collection of exquisite clothing, crafted from the finest materials and adorned with intricate details. From stunning evening gowns to tailored suits, our website is a treasure trove of elegance and sophistication. Explore our selection, featuring renowned fashion designers and emerging talents alike. With a seamless shopping experience, secure transactions, and prompt delivery, we aim to make your online shopping journey as exceptional as the clothing we offer. Elevate your style and embrace the allure of the extraordinary with Precious Clothing."
              ghLink="https://github.com/kashyapRathod03/preciouse"
              demoLink="/project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Textutils}
              isBlog={false}
              title="TextUtils"
              description="TextUtils is a versatile online platform designed to simplify and enhance your text-related tasks. Whether you need to format, analyze, or manipulate text, TextUtils has you covered. Our easy-to-use website provides a wide range of text-processing tools, from text case conversions to character count calculations and more. You can clean up messy text, generate lorem ipsum, or even compare text for similarities. With a user-friendly interface, TextUtils offers a convenient and efficient solution for anyone working with text, be it writers, students, or professionals. Save time and effort by harnessing the power of TextUtils for all your text-related needs."
              ghLink="https://github.com/kashyapRathod03/TextUtils"
              demoLink="/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
