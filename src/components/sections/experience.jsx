import React, { Component } from 'react';
import Section from './../section';
import Role from './../role';

class Experience extends Component {
  state = {
    active: 0,
    experiences: [
      {
        company: 'Synchrony',
        url: 'https://www.synchrony.com/',
        title: 'iOS Engineer Intern',
        start: 'January 2023',
        end: 'Present',
        city: 'Stamford',
        state: 'CT',
        details: [
          'Achieved a 15% reduction in call center volume through the creation of an innovative feature targeting a customer pain point',
          'Adhere to MVVM architecture principles to enhance the user experience by developing and enhancing existing features', 
          'Utilized Jira to effectively track sprints, stories, and deliver successful results on time while working on the MySynchrony iOS team'
        ],
        color: 'yellow',
      },{
        company: 'City of Norwalk',
        url: 'https://www.norwalkct.gov/',
        title: 'IT Summer Intern',
        start: 'June 2022',
        end: 'August 2022',
        city: 'Norwalk',
        state: 'CT',
        details: [
          'Reviewed and optimized existing backend code by implementing different data structures',
          'Implemented third-party services that increased productivity by automating manual tasks',
          'Assisted in developing and providing maintenance for a meeting manager website using the .NET framework'
        ],
        color: 'green',
      },
      {
        company: 'UConn School of Fine Arts',
        url: 'https://sfa.uconn.edu/',
        title: 'Student IT Assistant',
        start: 'September 2021',
        end: 'June 2022',
        city: 'Storrs',
        state: 'CT',
        details: [
          'Created and updated documentation for faculty and students concerning network, software, and hardware problems.',
          'Triaged problems to ensure technical issues were resolved in a timely manner',
          'Reviewed frontend code to maintain websites with respect to form, content, and ease of use'
        ],
        color: 'blue',
      }
    ],
  };
  render() {
    const { experiences, active } = this.state;
    return (
      <Section title='experience'>
        <p className='monospace experience-nav'>
          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  active === index
                    ? `link-${experience.color} experience.company `
                    : `link-text experience.company`
                }
                onClick={() => this.setState({ active: index })}>
                {experience.company}
              </span>
              {index < experiences.length - 1 && <span>&nbsp;/&nbsp;</span>}
            </React.Fragment>
          ))}
        </p>
        {experiences.map(
          (experience, index) =>
            active === index && <Role experience={experience} key={index} />
        )}
      </Section>
    );
  }
}

export default Experience;
