import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getReg } from "@/actions/login"

function Register (props) {
  let  { getReg , history } = props
  const onFinish = values => {
    getReg(values)
      .then(res => {
        if(res.payload.code === 200){
          alert('注册成功')
          history.push('/login')
        }
      })
  };
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default connect((state) => {
  return {

  }
},{
    getReg
})(Register)

  
