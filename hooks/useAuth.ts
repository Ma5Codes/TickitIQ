"use client"

import { useSession } from "next-auth/react"

export function useAuth() {
  const { data: session, status } = useSession()
  
  return {
    user: session?.user || null,
    isLoading: status === "loading",
    isAuthenticated: !!session?.user,
  }
}

export function useUser() {
  const { data: session } = useSession()
  
  return {
    user: session?.user || null,
    isLoaded: true, // For Clerk compatibility
  }
}