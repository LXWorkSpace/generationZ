import { loginVerify, selectByUsername } from '../services/index'
import { message } from 'antd';

export default {

  namespace: 'user',

  state: {
    userInfo: {
      isLogin: false,
      username: '',
      userDetail: {}
    }

  },

  reducers: {
    getUserInfo(state, { payload }) {
      return { ...state, userInfo: payload };
    },
    login(state, { payload }) {
      return { ...state, userInfo: payload };
    },
    logout(state, { payload }) {
      localStorage.removeItem('username')
      payload = {
        userInfo: {
          isLogin: false,
          username: '',
          userDetail: {}
        }
      };
      return { ...state, userInfo: payload };
    }
  },
  effects: {
    *getUserInfoAsync({ params }, { call, put }) {
      let userDetail = yield call(selectByUsername, new URLSearchParams(params))
      yield put({
        type: 'getUserInfo',
        payload: {
          isLogin: true,
          username: params.username,
          userDetail: userDetail
        }
      })
    },
    *loginAsync({ params }, { call, put }) {
      let res = yield call(loginVerify, new URLSearchParams(params))
      if (res.code == 1) {
        localStorage.setItem('username', params.username)
        message.success(
          `${params.username},欢迎您~`
        );
        let userDetail = yield call(selectByUsername, new URLSearchParams(params))
        yield put({
          type: 'login',
          payload: {
            isLogin: true,
            username: params.username,
            userDetail: userDetail
          }
        })
      } else {
        message.error(
          '用户名或密码错误'
        );
      }


    }
  }


};
