import React, { useState } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
import { connect } from 'dva';
import { mixin } from '../../utils/mixins'


const Header = (props) => {

  let activeNavId = sessionStorage.getItem('activeNavId') == null ? 0 : sessionStorage.getItem('activeNavId')
  let logout = () => {
    props.dispatch({
      type: 'user/logout'
    })
  }

  // 原因：
  // 花括号之间的所有值都会立即求值。这将导致在每个呈现循环中调用handleClickNav函数。

  // 通过使用箭头函数包装函数，计算后的代码将生成一个函数，该函数可以在用户单击按钮时调用。

  // 后话：

  // 出现无限循环的原因是事件回调中触发了重新呈现，最常见setState触发的，这将再次调用事件回调，并导致React停止并抛出“太多的重新呈现”的错误
  let handleClickNav = (id) => {
    if (id == 2) id = 0;
    sessionStorage.setItem('activeNavId', id)
    setNavs({
      ...navs,
      activeNavId: id
    })

  }

  let userInfo = () => {
    if (sessionStorage.getItem('username') && !this.props.user.isLogin) {
      props.dispatch({
        type: 'user/getUserInfoAsync',
        params: {
          username: sessionStorage.getItem('username')
        }
      })
    }
    if (props.user.isLogin) {
      let avator = props.user.userDetail[0].avator
      return <div className="userInfo">
        <img src={mixin.getUrl(avator)}></img>
        {localStorage.getItem('username')}
        <Button type="link" onClick={logout}>登出</Button>
      </div >
    }

  }

  return (
    <header>
      <Menu onClick={handleClick.bind(this)} selectedKeys={current} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="find">
          <Link to="/find">Find</Link>
        </Menu.Item>
        <Menu.Item key="my">
          <Link to="/my">My</Link>
        </Menu.Item>
      </Menu>
    </header >
  );



}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user.userInfo
  }
}

export default connect(mapStateToProps)(Header);
