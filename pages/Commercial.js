import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

export default class Commercial extends Component {
    render() {
        return (
            <div className='bg-gradient-to-r from-[#D6E0F0] to-[#8D93AB]'>
                <section className='relative'>
                    <div>
                        <Image
                            src="/media/Residential_1.webp"
                            width="1920"
                            height="1080"
                            alt="Residential banner"
                        />
                    </div>
                    <div className='w-full absolute bottom-10 sm:bottom-1/3'>
                        <div className='w-2/5 mx-auto bg-black p-4 rounded-xl opacity-90 lg:w-1/4'>
                            <h2 className='animate-pulse uppercase font-semibold text-center text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Commercial</h2>
                        </div>
                    </div>
                </section>
                <section className='py-8 md:py-10 lg:py-12'>
                    <div className='w-11/12 mx-auto rounded-lg shadow-xl sm:py-3 md:rounded-xl'>
                        <Carousel>
                            <div className='w-11/12 mx-auto lg:p-1 lg:w-5/6'>
                                <div className='md:p-1'>
                                    <Image
                                        src="/media/Residential_2.webp"
                                        width="1920"
                                        height="1080"
                                        alt="Residential image 1"
                                    />
                                </div>
                            </div>
                            <div className='w-11/12 mx-auto lg:p-1 lg:w-5/6'>
                                <div className='md:p-1'>
                                    <Image
                                        src="/media/Residential_3.webp"
                                        width="1920"
                                        height="1080"
                                        alt="Residential image 1"
                                    />
                                </div>
                            </div>
                            <div className='w-11/12 mx-auto lg:p-1 lg:w-5/6'>
                                <div className='md:p-1'>
                                    <Image
                                        src="/media/Residential_4.webp"
                                        width="1920"
                                        height="1080"
                                        alt="Residential image 1"
                                    />
                                </div>
                            </div>
                            <div className='w-11/12 mx-auto lg:p-1 lg:w-5/6'>
                                <div className='md:p-1'>
                                    <Image
                                        src="/media/Residential_5.webp"
                                        width="1920"
                                        height="1080"
                                        alt="Residential image 1"
                                    />
                                </div>
                            </div>
                            <div className='w-11/12 mx-auto lg:p-1 lg:w-5/6'>
                                <div className='md:p-1'>
                                    <Image
                                        src="/media/Residential_6.webp"
                                        width="1920"
                                        height="1080"
                                        alt="Residential image 1"
                                    />
                                </div>
                            </div>
                            <div className='w-11/12 mx-auto lg:p-1 lg:w-5/6'>
                                <div className='md:p-1'>
                                    <Image
                                        src="/media/Residential_7.webp"
                                        width="1920"
                                        height="1080"
                                        alt="Residential image 1"
                                    />
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </section>
            </div>
        )
    }
}