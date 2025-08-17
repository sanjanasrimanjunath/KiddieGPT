"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuList = [
    { name: 'Home', path: '/' },
    { name: 'Create Story', path: '/create-story' },
    { name: 'Explore Stories', path: '/explore' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header
      className={cn(
        "w-full fixed top-0 z-50 transition-all duration-300 border-b overflow-hidden",
        scrolled
          ? "bg-gradient-to-r from-[#EEDFFF] via-[#E4CAFF] to-[#DBB5FF] shadow-md border-purple-200/70 backdrop-blur-md"
          : "bg-gradient-to-r from-[#EEDFFF] via-[#E4CAFF] to-[#DBB5FF] border-purple-200/50"
      )}
    >
      {/* background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/logooo.png"
              alt="logo"
              fill
              className="object-contain drop-shadow-lg"
              sizes="48px"
            />
          </div>
          <Link href={"/"}>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              KiddieGPT
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 justify-center flex-1">
          {menuList.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="group relative text-lg font-medium text-purple-800 hover:text-pink-600 hover:bg-transparent px-4 py-2 rounded-lg transition-all"
            >
              <a href={item.path}>
                {item.name}
                <motion.span
                  className="absolute left-0 bottom-1.5 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "70%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </a>
            </Button>
          ))}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-2">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant="default" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md hover:shadow-lg">
                <LayoutDashboard /> Dashboard
              </Button>
            </Link>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-700 hover:bg-purple-100/50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-gradient-to-r from-[#EEDFFF] via-[#E4CAFF] to-[#DBB5FF] px-6 py-4 md:hidden flex flex-col gap-1 border-t border-purple-100 shadow-lg relative"
          >
            {menuList.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start text-lg text-purple-800 hover:text-pink-600 hover:bg-transparent py-3 px-4 rounded-lg group relative overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={item.path}>
                    {item.name}
                    <span className="absolute left-0 bottom-2.5 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 w-0 group-hover:w-3/4 transition-all duration-300 ease-out" />
                  </a>
                </Button>
              </motion.div>
            ))}
            <div className="flex flex-col gap-3 mt-2 pt-2 border-t border-purple-100">
              <SignedIn>
                <Link href={"/dashboard"}>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md hover:shadow-lg">
                    <LayoutDashboard /> Dashboard
                  </Button>
                  <UserButton />
                </Link>
              </SignedIn>

              <SignedOut>
                <SignInButton>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg">
                    Get Started
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
