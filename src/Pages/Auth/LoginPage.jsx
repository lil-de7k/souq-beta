import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Username:', username)
    console.log('Password:', password)
  }

  return (
    <>
    <div className="flex justify-center pt-10 px-4 sm:px-6">
      <div className="p-6 sm:p-8 w-full max-w-md bg-white shadow-lg rounded-md">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-center mb-5">تسجيل دخول</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="block text-[11px] sm:text-xs md:text-sm font-medium text-gray-800">اسم المستخدم</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-1 mt-2 border border-gray-400 rounded-sm text-xs sm:text-sm"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-[11px] sm:text-xs md:text-sm font-medium text-gray-800">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1 mt-2 border border-gray-400 rounded-sm text-xs sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-950 text-xs sm:text-sm cursor-pointer text-white rounded-md hover:bg-gray-900"
          >
            تسجيل الدخول
          </button>

          <div className="mt-3.5 text-gray-800 text-[10px] sm:text-xs font-semibold text-center">
            <p>ليس لديك حساب؟ <Link to="/register"><span className="text-red-500">انشاء حساب جديد</span></Link></p>
          </div>
        </form>
      </div>
    </div>
    <div className='mt-7 sm:mt-0 px-5 sm:px-20 text-[11px] sm:text-sm'>
      <Link to='/admin/all-products'>
        <p className='text-sky-600'>الدخول بحساب ادمن</p>
      </Link>
      <Link to='/user/all-orders'>
        <p className='text-sky-600 mt-2'>الدخول بحساب مستخدم</p>
      </Link>
    </div>
    </>
  )
}

export default LoginPage