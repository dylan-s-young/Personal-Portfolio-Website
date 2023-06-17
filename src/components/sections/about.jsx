import React, { Component } from 'react';
import Section from './../section';

class About extends Component {
  state = {};
  render() {
    return (
      <Section title='About Me'>
        <p>
          Hello, I'm Dylan, a computer science student at <a
            href='https://uconn.edu/'
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            UConn
          </a>.{' '} My passion for learning how to code stems from my involvement in reselling sneakers. From this,
          I've had a passion for emerging technologies, particulary in the blockchain space. I firmly believe that blockchain's potential to enhance security, transparency, 
          and trust will address the pressing pain points in the finance sector, 
          revolutionizing how financial transactions are conducted and mitigating concerns related to fraud and lack of accountability. {' '}
        </p>
        <p>
          Fun Facts: 
          <div>- Big NYKnicks & NYJets fan </div>
          <div>- Love to read & play basketball</div>
          <div>- Favorite food are oysters </div>

        </p>
      </Section>
    );
  }
}

export default About;
