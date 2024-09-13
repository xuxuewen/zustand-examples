import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { useAuthStore } from '../store'
import { Layout } from '../components/Layout'

export function UserInfo() {
  const { username } = useAuthStore()

  return (
    <Layout>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">User Information</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Welcome, {username}! You are logged in.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{username}</dd>
            </div>
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <Link to="/home">
                  <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
                    Back to Home
                  </Button>
                </Link>
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </Layout>
  )
}