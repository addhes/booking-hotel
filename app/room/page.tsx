import HeaderSection from '@/components/header-section'
import Main from '@/components/main'
import RoomSkeleton from '@/components/skeltons/room-skeleton'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
    title: "Room & Rates",
    description: "Choose your best room today"
}

const RoomPage = () => {
  return (
    <div>
        <HeaderSection title='Room & Rates' subTitle='Lorem Ipsum dolor sit amet' />
        <div className="mt-10 px-4">
          <Suspense fallback={<RoomSkeleton />}>
            <Main />
          </Suspense>
        </div>
    </div>
  )
}

export default RoomPage