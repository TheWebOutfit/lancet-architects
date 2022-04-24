import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
    return (
        <div className='bg-gradient-to-r from-slate-300 to-slate-400'>
            <section className='relative'>
                <div>
                    <Image
                        src="/media/portfolio_banner.webp"
                        width="1920"
                        height="950"
                        alt="Portfolio banner"
                    />
                </div>
                <div className='absolute bottom-2 w-full md:bottom-5 lg:bottom-10 xl:bottom-20'>
                    <article className='bg-gray-600 w-3/5 mx-auto opacity-95 py-2 px-1 rounded-lg md:hover:scale-105 transition-all ease-in-out md:w-1/2 md:px-3 lg:px-7 lg:py-3'>
                        <h2 className='animate-pulse mb-1 uppercase text-center font-semibold text-white md:text-xl lg:text-2xl lg:mb-2 xl:mb-3 xl:text-3xl'>Portfolio</h2>
                        <p className='text-xs animate-pulse text-white text-center sm:text-sm sm:uppercase md:text-base lg:text-lg xl:text-xl'>Showcasing some of our Works</p>
                    </article>
                </div>
            </section>
            <section className='py-5 sm:pt-8 lg:pt-10'>
                <div className="w-3/4 rounded-xl shadow-xl bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 justify-center hover:scale-105 transition-all ease-in-out">
                    <div className="w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
                        <Image
                            src="/media/residential.webp"
                            height="1080"
                            width="1080"
                            alt="Ceiling image"
                        />
                    </div>
                    <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-3 md:w-3/5 lg:p-10">
                        <h2 className="animate-pulse uppercase text-black text-lg font-semibold sm:text-lg md:text-xl md:font-bold lg:text-2xl lg:mb-3 lg:text-left">
                            Residential
                        </h2>
                        <p className="text-sm text-black sm:text-base lg:text-lg lg:text-left">
                            Your ideas are our priorities. Trust Lancet with every corner of your nest to weave the most unique set of dreams into existence!
                        </p>
                        <Link href="/Residential" passHref>
                            <a>
                                <div className="pt-8" >
                                    <button className="animate-pulse p-2 border-2 border-black">View More</button>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='py-5 sm:pt-8 lg:py-10'>
                <div className="w-3/4 rounded-xl shadow-xl bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 justify-center hover:scale-105 transition-all ease-in-out sm:flex-row-reverse">
                    <div className="w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
                        <Image
                            src="/media/institutional.webp"
                            height="1080"
                            width="1080"
                            alt="Modular kitchen Image"
                        />
                    </div>
                    <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-3 md:w-3/5 lg:p-10">
                        <h2 className="animate-pulse uppercase text-black text-lg font-semibold sm:text-lg md:text-xl md:font-bold lg:text-2xl lg:mb-3 lg:text-left">
                            Institutional
                        </h2>
                        <p className="text-sm text-black sm:text-base lg:text-lg lg:text-left">
                            The architectures and engineers of the Lancet impart the point ornamentation to industrial designing.
                        </p>
                        <Link href="/Institutional" passHref>
                            <a>
                                <div className="pt-8" >
                                    <button className="animate-pulse p-2 border-2 border-black">View More</button>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='py-5 sm:py-8 lg:pb-10'>
                <div className="w-3/4 rounded-xl shadow-xl bg-white/30 p-3 mx-auto sm:flex sm:p-5 md:p-8 md:w-3/5 justify-center hover:scale-105 transition-all ease-in-out">
                    <div className="w-3/4 mx-auto border-2 border-black p-2 md:border-4 md:w-2/5 self-center">
                        <Image
                            src="/media/commercial.webp"
                            height="1080"
                            width="1080"
                            alt="Ceiling image"
                        />
                    </div>
                    <div className="sm:w-1/2 text-center flex-reverse p-3 mx-auto my-auto sm:p-5 md:p-3 md:w-3/5 lg:p-10">
                        <h2 className="uppercase text-black text-lg font-semibold sm:text-lg md:text-xl md:font-bold lg:text-2xl lg:mb-3 lg:text-left">
                            Commercial
                        </h2>
                        <p className="text-sm text-black sm:text-base lg:text-lg lg:text-left">
                            We understand the influence of designs on the audience. Hence, we illustrate the most alluring craftwork to heighten your commerce!
                        </p>
                        <Link href="/Commercial" passHref>
                            <a>
                                <div className="pt-8" >
                                    <button className="animate-pulse p-2 border-2 border-black">View More</button>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio