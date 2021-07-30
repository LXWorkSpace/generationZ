import React from 'react';
import ParticlesBg from 'particles-bg';
import style from './My.css';
import { Form, Input, Button, Checkbox } from 'antd';
import Fade from 'react-reveal';
import { connect } from 'dva';



const My = (props) => {


  const onFinish = (values) => {

    props.dispatch({
      type: 'user/loginAsync',
      params: {
        username: values.username,
        password: values.password
      }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  console.log(props);
  if (!props.user.isLogin) {
    return (
      <div className={style.my}>
        <div>
          <ParticlesBg type="circle" bg={true} />
          <Fade bottom>
            <div className={style.login}>
              <h2><div>用户登录</div></h2>

              <Form
                name="basic"
                labelCol={{
                  span: 8
                }}
                wrapperCol={{
                  span: 16
                }}
                initialValues={{
                  remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!'
                    }
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 5,
                    span: 16
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 4,
                    span: 16

                  }}
                >
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Fade>

        </div>

      </div >
    )
  } else {
    return (
      <div>

      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    user: state.user.userInfo
  }
}

export default connect(mapStateToProps)(My);