import { Signin } from '@/components/SignComponents/signin'
import React from 'react'
import { Toaster } from 'sonner'

export default function  signinpage()  {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <Toaster/>
    <Signin/>
    </div>
  )
}
