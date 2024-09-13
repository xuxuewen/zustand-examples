import { Form, Input, Button, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuthStore } from './store'
import './App.css'

const { Title } = Typography

interface LoginFormValues {
  username: string
  password: string
}

function App() {
  const { isLoggedIn, username, login, logout, isLoading } = useAuthStore()

  const onFinish = async (values: LoginFormValues) => {
    await login(values.username)
  }

  if (isLoggedIn) {
    return (
      <div className="app-container">
        <div className="login-form-container">
          <Title level={2}>Welcome, {username}!</Title>
          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="login-form-container">
        <Title level={2} className="login-title">Login</Title>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          className="login-form"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button" loading={isLoading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default App
