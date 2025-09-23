import { Signup} from '@/components/SignComponents/signup'
import React from 'react'
import { Toaster } from 'sonner'

export default function  signup()  {
  return (
    <div className='flex justify-center items-center min-h-screen bg-pattern'>
      <Toaster/>
    <Signup/>
    </div>
  )
}
