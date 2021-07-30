import React, { Component } from 'react';
import Fade from 'react-reveal';
import ParticlesBg from 'particles-bg';
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <ParticlesBg type="circle" bg={true} />
        <div className='banner'>
          <div className='bannerText'>
            <Fade bottom duration={1200}>
              <h1>GenerationZ</h1>
              <h1>Music</h1>
            </Fade>
          </div>
        </div>
      </div >
    );
  }
}