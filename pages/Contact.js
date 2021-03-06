import React from 'react'
import Image from 'next/image'

const contact = () => {
    return (
        <div className='bg-gradient-to-r from-slate-400 to-slate-300'>
            <section className='relative'>
                <div>
                    <Image
                        src="/media/interiors_1.webp"
                        height="900"
                        width="1920"
                        alt="Contact page banner"
                    />
                </div>
                <div className='absolute w-full bottom-2 md:top-1/2'>
                    <div className='w-1/3 mx-auto bg-black rounded-xl opacity-90 p-3 md:w-1/4'>
                        <h2 className='font-semibold text-center text-lg animate-pulse text-white sm:text-xl md:text-2xl md:uppercase lg:text-3xl xl:text-4xl'>Contact Us</h2>
                    </div>
                </div>
            </section>
            <section className='pt-5 space-y-5 sm:space-y-8 md:pt-8 lg:pt-10 lg:space-y-10 xl:space-y-12 xl:pt-12'>
                <div className='w-2/3 mx-auto py-5 rounded-xl bg-gradient-to-r from-slate-300 to-slate-400 shadow-xl sm:w-3/5 md:py-8 md:flex md:justify-around lg:hover:scale-105 transition-all ease-in-out lg:py-10 xl:py-12'>
                    <div className='md:w-1/2 md:px-2'>
                        <div className='animate-pulse w-1/6 mx-auto lg:my-auto'>
                            <Image
                                src="/media/call.png"
                                height="512"
                                width="512"
                                alt="Call icon"
                            />
                        </div>
                        <div className='py-3 px-2 mb-5 mx-auto sm:mb-7 lg:w-4/6 lg:my-auto'>
                            <a href="tel:917275712348">
                                <p className='text-center text-sm font-medium mb-1 lg:text-base md:mb-2'>Phone: +91 7275712348</p>
                            </a>
                            <a href="mailto:lancetarchitects@gmail.com">
                                <p className='text-center text-sm font-medium lg:text-base'>Email: lancetarchitects@gmail.com</p>
                            </a>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:px-2'>
                        <div className='animate-pulse w-1/6 mx-auto'>
                            <Image
                                src="/media/location.png"
                                height="512"
                                width="512"
                                alt="Call icon"
                            />
                        </div>
                        <div className='py-3 px-2'>
                            <p className='text-center text-sm mb-1 lg:text-base'>14, Amrapali Vihar, Raibareli Road</p>
                            <p className='text-center text-sm mb-1 lg:text-base'>Near Sainik Dhaba</p>
                            <p className='text-center text-sm mb-1 lg:text-base'>Lucknow</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form action="mailto:lancentarchitects@gmail.com" method='POST' className='w-3/4 mx-auto p-3 text-center sm:w-3/5 sm:shadow-xl sm:bg-gradient-to-r from-slate-300 to-slate-400 sm:rounded-xl sm:hover:scale-105 transition-all ease-in-out lg:w-2/5 xl:w-1/3'>
                        <div className='p-1 mb-1 md:mb-2'>
                            <label htmlFor="name" className='block mb-1 font-medium uppercase md:mb-2'>Name:</label>
                            <input type="text" id='name' placeholder='Enter Name' className='p-1 rounded-md bg-slate-100 lg:rounded-xl lg:p-2' required/>
                        </div>
                        <div className='p-1 mb-1 md:mb-2'>
                            <label htmlFor="mob" className='block mb-1 font-medium uppercase md:mb-2'>Mobile:</label>
                            <input type="tel" id='mob' placeholder='Phone Number' className='p-1 rounded-md bg-slate-100 lg:rounded-xl lg:p-2' required/>
                        </div>
                        <div className='p-1 mb-1 md:mb-2'>
                        <label htmlFor="address" className='block mb-1 font-medium uppercase md:mb-2'>Address:</label>
                        <textarea name="address" id="address" cols="30" rows="5" placeholder='Enter Address' className='p-1 rounded-md bg-slate-100 lg:rounded-xl lg:p-2'></textarea>
                        </div>
                        <button type='submit' className='py-2 px-3 bg-blue-700 text-white rounded-md font-medium hover:scale-105 transition-all ease-in-out'>Send</button>
                    </form>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890.5161770372753!2d80.94282793923918!3d26.774207206483066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb762970e11b%3A0xe01e2c00f002bd9a!2sQWFV%2BJ67%2C%20Sainik%20Nagar%2C%20Telibagh%2C%20Lucknow%2C%20Uttar%20Pradesh%20226012!5e0!3m2!1sen!2sin!4v1650778314436!5m2!1sen!2sin" loading="lazy" className='h-80 w-full'></iframe>
            </section>
        </div>
    )
}

export default contact