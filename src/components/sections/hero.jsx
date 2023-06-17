import React, { Component } from 'react';
import Icons from '../../icons/icons';
import LogoIcon from '../../icons/logo';
import IconScroll from '../../icons/scroll';
import Fade from 'react-reveal/Fade';
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

class Hero extends Component {
  state = {};
  render() {
    const duration = 5000;
    const delay = 100;

    return (
      <React.Fragment>
        <div className='hero'>
          <div className='hero-content'>
            <Fade duration={duration}>
              <div>
              <LogoIcon />
              </div>
            </Fade>
            {/* <Fade duration={duration} delay={delay}> */}
              <h1 className='hero-text'>
              <Typist avgTypingDelay={20} cursor={{}} >
                I'm <span className='name'>Dylan Young</span>, a
                software engineer and crypto enthusiast based in the New York Metropolitan area. Let's build
                the future of finance together!{' '}
                </Typist>
              </h1>
              <Fade duration={duration} delay={delay * 32}>
              <h2 className='hero-text'>
                Check out my{' '}
                <a
                  className='link-yellow'
                  href='/Dylan_Young_Resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  resume
                </a>{' '}
                and let's chat:{' '}
                <a
                  className='link-red'
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=dylan.s.young@uconn.edu'
                  target='_blank'
                  rel='noopener noreferrer'>
                  dylan.s.young@uconn.edu
                </a>
                .
              </h2>
              <Icons />
            </Fade>
          </div>
        </div>
        <Fade duration={duration} delay={delay * 40}>
          <IconScroll />
        </Fade>
      </React.Fragment>
    );
  }
}

export default Hero;
