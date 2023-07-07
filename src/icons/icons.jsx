import React, { Component } from 'react';
import {
  IconGitHub,
  IconLinkedIn,
  IconSubstack
} from './../icons';

const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/dylan-s-young',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dylan-young-1a565a1b7/',
  }, 
  {
    name: 'Substack',
    url: 'https://substack.com/@dylansyoung',
  }
  // {
  //   name: 'Instagram',
  //   url: 'https://www.instagram.com/slau.ghtered',
  // },
  // {
  //   name: 'YouTube',
  //   url: 'https://www.youtube.com/channel/UCAwe4_4fOMw1C4KGIWET8zg/',
  // },
];

class Icons extends Component {
  render() {
    return (
      <div>
        {socialMedia.map(({ url, name }, i) => (
          <a
            key={i}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='icon-hero'>
            {this.getIcon(name)}
          </a>
        ))}
      </div>
    );
  }

  getIcon(name) {
    switch (name) {
      case 'GitHub':
        return <IconGitHub />;
      case 'LinkedIn':
        return <IconLinkedIn />;
      case 'Substack':
        return <IconSubstack />;  
      default:
    }
  }
}

export default Icons;
