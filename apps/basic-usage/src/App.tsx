import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuthStore } from './store'

const { Title } = Typography

interface LoginFormValues {
  username: string
  password: string
}

function App() {
  const { isLoggedIn, login, isLoading } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user-info')
    }
  }, [isLoggedIn, navigate])

  const onFinish = async (values: LoginFormValues) => {
    await login(values.username)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <Title level={2} className="text-center mb-6">Login</Title>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
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
            <Button type="primary" htmlType="submit" className="w-full" loading={isLoading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default App
