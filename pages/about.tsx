/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                Education
                <p>
                  <strong><a href='https://ritgoa.ac.in'>Shree Rayeshwar Institute of Engineering and Information Technology</a>, Shiroda (2019 - 2023)</strong><br></br>
                  <strong>Course:</strong> B.E. Computer Engineering<br></br>
                  <strong>MES College, Vasco  (PCMB)</strong><br></br>

                </p>
              </li>
              <li>
                  Work Experience
                <p>
                <strong>Software Developer Intern at <a href='https://www.creativecapsule.com/'>Creative Capsule Infotech</a>, Verna</strong><br></br>
                <strong>Duration:</strong> Aug 2022 to Oct 2022 (2 month)<br></br>
                Created a Web application to keep track of a GitHub users public repositories and notify the Created a Dashboard that will show the count of total GitHub accounts added in the system and total count of public repositories. <br></br>
                Created a Email notification system that will notify the users in the notification list via email about any new public repository added by the GitHub user registered in the system.<br></br>
                <strong>Technologies Used:</strong><strong>Frontend:</strong> ReactJS, HTML, CSS, JavaScript<br></br><strong>Backend:</strong> NodeJS, ExpressJS, NestJS , PostgreSQL<br></br><strong>Tools:</strong> Git, GitHub, VS Code, Postman<br></br>

                </p>
              </li>

              <li>
                Skills
                
                <p>
                <strong>Programming Languages:</strong> C, C++, Python, JavaScript<br></br>
                <strong>Web Development:</strong> HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, NestJS, PostgreSQL<br></br>
                <strong>Tools:</strong> Git, GitHub, VS Code, Postman<br></br>
                <strong>Operating Systems:</strong> Windows, Linux<br></br>
                <strong>Others:</strong> Data Structures and Algorithms, Object Oriented Programming, Machine Learning etc <br></br>

                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
         
        >
          <article>
            <h4>Project.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Portfolio Website"
                  href='github.com'     //  <---  Add your github link here
                >
                  Portfolio Website.
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2021 - Present</b>
                </a>
                <p>
                  Personal Website<br></br>
                  Built using ReactJS, HTML5, CSS3, Javascript <br></br>
                  Hosted on Netlify
               
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Covid19 Detection Using Federated Learning"
                  href="https://github.com/Vaibhav13kamat/Covid-detection-FL" //  <---  Add your github link here done
                >
                  Covid19 Detection Using Federated Learning.
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2022 - 2023</b>
                </a>
                <p>
                Collaborative Federated Learning Learning Approach allowing multiple edge devices Screening Covid19 from Xrays using deep learning without sharing patients Private Data<br></br>
                Compared the performance of four widely recognized deep learning models, namely VGG19, MobileNet, and InceptionV3. Evaluated these models both with and without the federated learning framework using chest x-ray image datasets.<br></br>

                <strong>Technology used</strong> - Tensorflow For image Detection, Flower Framework, OpenCv and Flask for Web App<br></br>
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Adaptive Leadership"
                  href="https://strong-cannoli-ddafb3.netlify.app/" //  <---  Add your github link here
                >
                  College Event Website.
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2022</b>
                </a>
                <p>
                A website for college event<br></br>
                Codeveloped and hosted TECH TWISTER 2023 website <br></br>
                <strong>Built Using</strong> HTML, CSS and Javscript. <strong>Hosted on </strong>Netlify<br></br>
                </p>
              </li>
              
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>Hobbies.</h4>
            <ul>
              
                <p>
                  <strong>Music</strong>-
                  I love listening to music. I listen to all kinds of music, Depends on the Mood <br></br>
                  <strong>Football</strong>-
                  I love playing and watching football. I am a huge fan of Tottenham Hotspur Football Club. <br></br>
                  <strong>Cubing</strong>-
                  My record for solving a Rubik's cube is 40 seconds. I average about at 1min MAX. <br></br>
                  <strong>Video Games</strong>-
                  WHY NOT? <br></br>
                  
                </p>
              
            </ul>
          </article>
        </PageWrapper>

        
      </PageSection>

    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
