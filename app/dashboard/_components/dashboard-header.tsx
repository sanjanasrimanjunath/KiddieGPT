"use client"

import { UserDetailContext } from '@/context/UserDetailContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const DashboardHeader = () => {

  const { userDetail, setUserDetail } = useContext(UserDetailContext)

  return (
    <div className="w-full bg-purple-900 text-white rounded-2xl px-6 py-5 flex flex-col md:flex-row justify-between items-center shadow-2xl shadow-amber-200">
      <h2 className="font-extrabold text-2xl md:text-3xl tracking-wide mb-3 md:mb-0">
        📚 My Stories
      </h2>
      <div className="flex items-center gap-3">
        <Image src="/coin.png" alt="coin" width={40} height={40} />
        <span className="text-xl md:text-2xl font-medium">{userDetail?.credits} Credits Left</span>
      </div>
    </div>
  )
}

export default DashboardHeader
