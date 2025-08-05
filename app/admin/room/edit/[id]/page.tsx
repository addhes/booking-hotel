import EditRoomPage from '@/components/admin/room/edit-room';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'

const UpdateRoomPage = async ({
    params
}:{
    params: Promise<{id: string}>
}) => {
    const roomId = (await params).id;
    if(!roomId) return notFound
  return (
    <div className='max-w-screen-xl px-4 py-16 mt-10 mx-auto'>
        <Suspense fallback={<p>Loading...</p>}>
            <EditRoomPage roomId={roomId} />
        </Suspense>
    </div>
  )
}

export default UpdateRoomPage