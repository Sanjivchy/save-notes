"use client"
import { useConvexAuth } from 'convex/react';

import { ModeToggle } from '@/components/theme-switcher';
import { useScrollTop } from '@/hooks/use-scroll.top'
import { cn } from '@/lib/utils';
import React from 'react'
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';


const NavBar = () => {
  const {isLoading, isAuthenticated } = useConvexAuth();
    const scrolled = useScrollTop();
  return (
    <div className={cn('z-50 bg-background fixed top-0 flex items-center w-full p-6', scrolled && "border-b shadow-sm")}>
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
            {
              isLoading && (
                <Spinner  />
              )
            }
            {!isAuthenticated && !isLoading && (
              <>
                <SignInButton>
                  <Button variant={'ghost'} size={'sm'}>Log in </Button>
                </SignInButton>
                <SignInButton mode='modal'>
                  <Button size={'sm'}>Get Save Note free</Button>
                </SignInButton>
              </>
            )}
            {
              isAuthenticated && !isLoading && (
                <>
                  <Button variant={'ghost'} size={'sm'}>
                    <Link href={'/documents'}>
                      Enter Save note
                    </Link>
                  </Button>
                  <UserButton />
                </>
              )
            }
            <ModeToggle/>
        </div>
    </div>
  )
}

export default NavBar



