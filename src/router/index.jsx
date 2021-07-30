'use strict';
import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'antd';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Find from './pages/Find/Find';
import My from './pages/My/My';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  const [current, setCurrent] = useState();
  const handleClick = e => {
    setCurrent(e.key);
  }
  return <BrowserRouter><div>
    <Header></Header>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
      <Route path="/Find" component={Find} />
      <Route path="/My" component={My} />
    </Switch>
  </div>
  </BrowserRouter >;
}

export default App;
