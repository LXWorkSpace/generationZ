import React, { useState } from 'react';
import { connect } from 'dva';
import style from './Find.css';
import { Link } from 'dva/router';
import Recommend from './Recommend/Recommend'
import Sheet from './Sheet/Sheet'
import Singer from './Singer/Singer'
import Ranking from './Ranking/Ranking'
import { Router, Route, Switch } from 'dva/router';

const Find = (props) => {
  let findActiveNavId = 1
  const [findNavs, setFindNavs] = useState({
    findActiveNavId,
    navs: [
      {
        name: 'Recommend',
        path: '/Find/Recommend',
        id: 0
      },
      {
        name: 'Sheet',
        path: '/Find/Sheet',
        id: 1
      },
      {
        name: 'Singer',
        path: '/Find/Singer',
        id: 2
      },
      {
        name: 'Ranking',
        path: '/Find/Ranking',
        id: 3
      }
    ]
  });

  let handleClickNav = (id) => {
    setFindNavs({
      ...findNavs,
      findActiveNavId: id
    })
  }

  const NavsData = findNavs.navs;
  const Navs = NavsData.map((item, index) => (
    <li key={index}
      onClick={() => handleClickNav(item.id)}
    >

      <Link to={item.path} style={findNavs.activeNavId == item.id ? { color: '#CF8BF3', borderBottom: '2px solid #fefefe' } : {}}>{item.name}</Link>
    </li>
  ));

  return (
    <div className='Find'>
      <div className={style.findNav}>{Navs}</div>
      <Switch>

        <Route path="/Find/Recommend" component={Recommend} />
        <Route path="/Find/Sheet" component={Sheet} />
        <Route path="/Find/Singer" component={Singer} />
        <Route path="/Find/Ranking" component={Ranking} />

      </Switch>
    </div >
  );
}

export default connect()(Find)