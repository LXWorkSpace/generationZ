import React, { Component } from 'react';
import style from './About.css';
import Fade from 'react-reveal';

export default class About extends Component {
  render() {

    return (
      <div style={{ marginTop: '64px' }}>
        <Fade bottom>
          <div className={style.aboutMe}>
            <div className={style.aboutRow}>
              <img
                className={style.aboutMePic}
                src="../../../public/assets/image/me.png"
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className={style.contactDetails}>
              <div className={style.aboutRow}>
                <h2>About Me</h2>
                <p>因个人兴趣通过考研进入新领域，对IT整个技术行业抱有强烈兴趣，希望通过实习学习更多技术、积累更过经验。具有良好的沟通能力，善于执行并拥有团队合作精神，可以承受高强度工作。</p>
              </div>

              <div className={style.aboutRow}>
                <div >
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>李翔（ LIXIANG ）</span>
                    <br />
                    <span>
                      首都经济贸易大学
                    </span>
                    <br />
                    <span>15070875201</span>
                    <br />
                    <span>97647613@qq.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.about}>
            <h1><span>WHAT</span></h1>
            <div className={style.aboutDetail}>
              <h3>WHAT IS THE GenerationZ</h3>
              <div className={style.aboutInfo}>
                Generation Z（Z一代：1996-2012）通常指那些在1996年以后出生的孩子，也就是生于60年代中期至70年代末的“X一代”的儿女。“Z一代”尚未出生就成了网络注册用户，他们常手拿电子玩具蹒跚学步。Z世代更关心的是“体验”。
              </div>
            </div>
          </div>
          <div className={style.about}>
            <h1><span>WHY</span></h1>
            <div className={style.aboutDetail}>
              <h3>WHY DO THIS PROJECT</h3>
              <div className={style.aboutInfo}>
                如今市面上的众多WEB端音乐播放器的体验都不尽如人意或者受众群体过于广泛，该项目主要是针对Z时代人群，为他们提供更好的用户体验。
              </div>
            </div>
          </div>

        </Fade>
      </div >


    );
  }
}
