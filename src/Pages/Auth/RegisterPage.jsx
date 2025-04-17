import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Username:', username)
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Confirm Password:', confirmPassword)
  }

  return (
    <div className="flex justify-center pt-10 px-4 sm:px-6">
      <div className="p-6 sm:p-8 w-full max-w-md bg-white shadow-lg rounded-md">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-center mb-5">انشاء حساب</h2>
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

          <div className="mb-3">
            <label htmlFor="email" className="block text-[11px] sm:text-xs md:text-sm font-medium text-gray-800">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-1 mt-2 border border-gray-400 rounded-sm text-xs sm:text-sm"
              required
            />
          </div>

          <div className="mb-3">
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

          <div className="mb-5">
            <label htmlFor="confirmPassword" className="block text-[11px] sm:text-xs md:text-sm font-medium text-gray-800">تأكيد كلمة المرور</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-1 mt-2 border border-gray-400 rounded-sm text-xs sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-950 text-xs sm:text-sm cursor-pointer text-white rounded-md hover:bg-gray-900"
          >
            انشاء حساب
          </button>

          <div className="mt-3.5 text-gray-800 text-[10px] sm:text-xs font-semibold text-center">
            <p>هل لديك حساب؟ <Link to="/login"><span className="text-red-500">تسجيل الدخول</span></Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
