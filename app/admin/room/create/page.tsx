import CreateFormRoom from '@/components/admin/room/create-form'
import { getAmenities } from '@/lib/data'
import React from 'react'


const CreateRoomPage = async () => {
  const amenities = await getAmenities();
  if (!amenities) return null
  return (
    <div className='max-w-screen-xl px-4 py-16 mt-10 mx-auto'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Create New Room</h1>
        <CreateFormRoom amenities={amenities} />
    </div>
  )
}

export default CreateRoomPage