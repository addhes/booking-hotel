import React from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'

const CreateFormRoom = () => {
  return (
    <form action="">
        <div className='grid md:grid-cols-12 gap-5'>
            <div className="col-span-8 bg-white p-4">
                <div className='mb-4'>
                    <input type='text' name='name' className='py-2 px-4 rounded-sm border border-gray-400 w-full'
                    placeholder='Room Name ...'/>
                    <div aria-live="polite" aria-atomic="true">
                        <span className='text-sm text-red-500 mt-2'>message</span>
                    </div>
                </div>
                <div className='mb-4'>
                    <textarea name='description'rows={8} className='py-2 px-4 rounded-sm border border-gray-400 w-full
                    ' placeholder='Description'></textarea>
                    <div aria-live="polite" aria-atomic="true">
                        <span className='text-sm text-red-500 mt-2'>message</span>
                    </div>
                </div>
                <div className='mb-4 grid md:grid-cols-3'>
                    <input type='checkbox' name='amenities' className='w-4 h-4 text-blue-600 bg-gray-100
                    border-gray-300 rounded'
                    placeholder='Room Name'/>
                    <div aria-live="polite" aria-atomic="true">
                        <span className='text-sm text-red-500 mt-2'>message</span>
                    </div>
                </div>
            </div>
            <div className='col-span-4 bg-white p-4'>
                <label htmlFor="input-file" className='flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300
                border-dashed rounded-md cursor-pointer bg-gray-50 relative'>
                    <div className='flex flex-col items-center justify-center text-gray-500 pt-5
                    pb-6 z-10'>
                        <div className='flex flex-col items-center justify-center'>
                            <IoCloudUploadOutline className='size-8' />
                            <p className='mb-1 text-sm font-bold'>Select Image</p>
                            <p className='text-xs'>SVG, PNG, JPG, GIF, or Other (Max: 4MB)</p>
                        </div>
                    </div>
                    <input type="file" id='input-file' className=' hidden' />
                </label>
                <div className='mb-4'>
                    <input type='text' name='capacity' className='py-2 px-4 rounded-sm border border-gray-400 w-full'
                    placeholder='Capacity ...'/>
                    <div aria-live="polite" aria-atomic="true">
                        <span className='text-sm text-red-500 mt-2'>message</span>
                    </div>
                </div>
                <div className='mb-4'>
                    <input type='text' name='price' className='py-2 px-4 rounded-sm border border-gray-400 w-full'
                    placeholder='Price ...'/>
                    <div aria-live="polite" aria-atomic="true">
                        <span className='text-sm text-red-500 mt-2'>message</span>
                    </div>
                </div>
                <button type='submit' className='bg-orange-400 text-white w-full hover:bg-orange-500 py-2.5 px-6 md:px-10
                text-lg font-semibold cursor-pointer'>
                    Save
                </button>
            </div>
        </div>
    </form>
  )
}

export default CreateFormRoom