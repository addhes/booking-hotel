import Image from 'next/image'
import HeaderSection from '@/components/header-section'
import { IoEyeOutline, IoLocateOutline } from 'react-icons/io5'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About",
    description: "Who we are"
}

const AboutPage = () => {
  return (
    <div>
        <HeaderSection title='About Us' subTitle='Lorem dolor sit amet.' />
        <div className=' max-w-screen-xl mx-auto py-20 px-4'>
            <div className='grid md:grid-cols-2 gap-8'>
                <Image src="/about-image.jpg" width={650} height={579} alt='about image' />
                <div>
                    <h1 className='text-5xl font-semibold text-gray-900 mb-4'>Who we are</h1>
                    <p className='text-gray-700 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quaerat vitae est quam sequi, vero, nulla neque consequatur repellendus nisi eveniet at, 
                        asperiores ab doloribus! Possimus vero facilis illo sequi soluta.</p>
                    <ul className='list-item space-y-6 pt-8'>
                        <li className='flex gap-5'>
                            <div className='flex-none mt-1'>
                                <IoEyeOutline className='size-7' />
                            </div>
                            <div className='flex-1'>
                                <h4 className=' text-lg font-semibold mb-1'>Vision :</h4>
                                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Illum nisi obcaecati impedit dolores quaerat numquam quas ratione nihil, vitae porro repudiandae rem consequatur ut modi, 
                                    cum laudantium esse explicabo minima.</p>
                            </div>
                        </li>
                        <li className='flex gap-5'>
                            <div className='flex-none mt-1'>
                                <IoLocateOutline className='size-7' />
                            </div>
                            <div className='flex-1'>
                                <h4 className=' text-lg font-semibold mb-1'>Mission :</h4>
                                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Illum nisi obcaecati impedit dolores quaerat numquam quas ratione nihil, vitae porro repudiandae rem consequatur ut modi, 
                                    cum laudantium esse explicabo minima.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage