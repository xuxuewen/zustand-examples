import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, Card } from 'antd'
import { useAuthStore } from './store'

const { Title, Paragraph } = Typography

function UserInfo() {
  const { isLoggedIn, username, logout } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!isLoggedIn) {
    return null
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
      <Card className="w-full max-w-md">
        <Title level={2}>User Information</Title>
        <Paragraph>
          <strong>Username:</strong> {username}
        </Paragraph>
        <Button onClick={handleLogout}>Logout</Button>
      </Card>
    </div>
  )
}

export default UserInfo