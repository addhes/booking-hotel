import Link from 'next/link'
import Image from 'next/image'

const footer = () => {
  return (
    <footer className='bg-gray-900'>
        <div className='max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16'>
            <div className='grid md:grid-cols-3 gap-7'>
                <div>
                    <Link href="/">
                        <Image src="/logo.png" width={128} height={49} alt='logo' />
                    </Link>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde illo et harum facilis ea, hic debitis cupiditate iste, 
                        architecto sequi rerum non cumque possimus ratione, tenetur placeat modi provident?
                    </p>
                </div>
                <div>
                    <div className='flex gap-20'>
                        <div className='flex-1 md:flex-none'>
                            <h4 className='mb-8 text-xl font-semibold text-white'>Links</h4>
                            <ul className='list-item space-y-5 text-gray-400'>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/room">Rooms</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex-1 md:flex-none'>
                            <h4 className='mb-8 text-xl font-semibold text-white'>Legal</h4>
                            <ul className='list-item space-y-5 text-gray-400'>
                                <li>
                                    <Link href="/">Legar</Link>
                                </li>
                                <li>
                                    <Link href="/about">Term & Condition</Link>
                                </li>
                                <li>
                                    <Link href="/room">Payment Method</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='mb-8 text-xl font-semibold text-white'>Newsletter</h4>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                    <form action="" className='mt-5'>
                        <div className='mb-5'>
                            <input type="text" name='email' className='w-full p-3 rounded-sm bg-white' placeholder='jhondoe@gmail.com' />
                        </div>
                        <button className='bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500'>
                            Subcribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className='max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500'>
            @copy; Copyright 2025 | Ade Setiawan | All Right Reserved
        </div>
    </footer>
  )
}

export default footer