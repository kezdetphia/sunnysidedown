import { auth } from '@/lib/auth'
import React from 'react'

export const SessionWrapper = async({children}) => {
  const session = await auth()

  return (
    <div>{children}</div>
  )
}
