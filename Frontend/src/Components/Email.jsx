import React from 'react'
import Input  from './Input.jsx'
import Button from './Button.jsx'

function Email() {
    return (
        <div className='my-20 mx-10 flex justify-center border bg-white'>
            <div className='py-16 px-16'>
                <div className='text-4xl my-10'>RESOLVE YOUR PROBLEM HERE</div>
                <div>GIVE A DETAILED EXPLANATION</div>
            </div>
            <div className='py-16 px-10 w-96'>
                <Input name="Full Name"/>
                <Input name="Email Address"/>
                <Input name="Subject"/>
                <Button/>
            </div>
        </div>
    )
}

export default Email
