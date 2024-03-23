import { sayHello } from '@/lib/action'
import React from 'react'

const ServerActionPage = () => {
  sayHello()
  return (
    <div>
      Server Action page
    </div>
  )
}

export default ServerActionPage
