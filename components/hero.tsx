import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/hero3.jpg" alt='img' fill className='object-cover object-center w-full h-full'/>
                <div className=' absolute inset-0 bg-black opacity-50'></div>
            </div>
            <div className='relative flex flex-col justify-center items-center h-full text-center'>
                <h1 className='text-7xl font-extrabold leading-tight mb-3 capitalize'>Book your luxury room</h1>
                <p className='mb-3 text-xl text-gray-300'>Get Special offer just for you today</p>
                <div className='flex gap-5'>
                    <Link href="/room" className='bg-orange-400 text-white hover:bg-orange-500 py-2 px-6 md:px-10 text-lg
                    font-semibold hover:scale-105 hover:shadow-lg'>Book Now
                    </Link>
                    <Link href="/room" className='bg-transparent border border-orange-400 text-white hover:bg-orange-500 py-2 px-6 md:px-10 text-lg
                    font-semibold hover:scale-105 hover:shadow-lg'>Contact us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero