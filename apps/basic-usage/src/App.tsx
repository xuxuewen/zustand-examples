import { Form, Input, Button, Typography, Space } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuthStore } from './store'

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
      <Space direction="vertical" align="center" style={{ width: '100%', padding: '20px' }}>
        <Title level={2}>Welcome, {username}!</Title>
        <Button onClick={logout}>Logout</Button>
      </Space>
    )
  }

  return (
    <Space direction="vertical" align="center" style={{ width: '100%', padding: '20px' }}>
      <Title level={2}>Login</Title>
      <Form
        name="login"
        onFinish={onFinish}
        style={{ width: 300 }}
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
          <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={isLoading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

export default App
