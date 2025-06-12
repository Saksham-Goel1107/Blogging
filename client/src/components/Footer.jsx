import React from 'react'

const Footer = () => {
    return (
        <div className='text-sm text-center bg-gray-50 py-4'>
            © Copyright {new Date().getFullYear()} | Designed & Developed By: <a href='https://github.com/Saksham-Goel1107' target='_blank' className='font-bold'>Saksham Goel</a>
        </div>
    )
}

export default Footer