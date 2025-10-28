"use client"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
  return (
    <div>
      Profile Page

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <SignedOut>
        <SignInButton/>
      </SignedOut>
    </div>
  )
}

export default ProfilePage
