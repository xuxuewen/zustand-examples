
import { Button, Typography, Space } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useCounterStore } from './store'

const { Title, Paragraph } = Typography

function App() {
  const { count, increment, decrement } = useCounterStore()

  return (
    <Space direction="vertical" align="center" style={{ width: '100%', padding: '20px' }}>
      <Title level={2}>Zustand Basic Usage with Ant Design</Title>
      <Paragraph>Count: {count}</Paragraph>
      <Space>
        <Button type="primary" icon={<PlusOutlined />} onClick={increment}>
          Increment
        </Button>
        <Button danger icon={<MinusOutlined />} onClick={decrement}>
          Decrement
        </Button>
      </Space>
    </Space>
  )
}

export default App
