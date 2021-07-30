import React, { Component } from 'react';
import Fade from 'react-reveal';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">

              <ul className="copyright">
                <li>&copy; Copyright 2021 GenerationZ</li>
                <p></p>
                <li>
                  Design by LIXIANG
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default Footer;
