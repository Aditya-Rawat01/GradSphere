import { Signin } from '@/components/SignComponents/signin'
import React from 'react'
import { Toaster } from 'sonner'

export default function  signinpage()  {
  return (
    <div className='flex justify-center items-center min-h-screen bg-pattern'>
      <Toaster/>
    <Signin/>
    </div>
  )
}
