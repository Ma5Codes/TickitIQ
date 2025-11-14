'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/images/logo.png'
import SearchBar from './SearchBar'
import ThemeToggle from './ThemeToggle'

function Header() {
  const { data: session, status } = useSession()

  return (
    <div className='border-b border-border bg-card/50 backdrop-blur-sm'>
      <div className='flex flex-col lg:flex-row items-center gap-4 p-4'>
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="w-24 lg:w-28"
            />
          </Link>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            {session ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1.5 text-sm rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition border border-red-300 dark:border-red-700"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link href="/auth/signin">
                <button className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-gray-300 dark:border-gray-700">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        <div className="w-full lg:max-w-2xl">
          <SearchBar />
        </div>

        <div className="hidden lg:block ml-auto">
          {session ? (
            <div className="flex items-center gap-3">
              <Link href="/seller">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 text-sm rounded-lg hover:from-violet-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Sell Tickets
                </button>
              </Link>

              <Link href="/tickets">
                <button className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-gray-300 dark:border-gray-700">
                  My Tickets
                </button>
              </Link>
              <ThemeToggle />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {session.user?.name}
              </span>
              <button
                onClick={() => signOut()}
                className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1.5 text-sm rounded-lg hover:bg-red-200 dark:hover:bg-red-800 transition border border-red-300 dark:border-red-700"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link href="/auth/signin">
                <button className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-gray-300 dark:border-gray-700">
                  Sign In
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 text-sm rounded-lg hover:from-violet-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Action Buttons */}
        <div className="lg:hidden w-full flex justify-center gap-3">
          {session ? (
            <>
              <Link href="/seller" className="flex-1">
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 text-sm rounded-lg hover:from-violet-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Sell Tickets
                </button>
              </Link>

              <Link href="/tickets" className="flex-1">
                <button className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition border border-gray-300 dark:border-gray-700">
                  My Tickets
                </button>
              </Link>
            </>
          ) : (
            <Link href="/auth/signup" className="w-full">
              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-3 py-1.5 text-sm rounded-lg hover:from-violet-600 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                Sign Up
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
