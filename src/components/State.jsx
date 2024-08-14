import React from 'react'
import phone from '../assets/images/illustration-phones.svg'
import circle from '../assets/images/bg-pattern-circles.svg'
const State = () => {
    return (
        <section class='relative pb-[2rem] pt-[10rem] sm:fle'>
            <div>
                <img class='absolute bottom-[20rem]' src={phone} alt="" />
            </div>
            <div class='bg-blue-950 rounded-bl-[5rem] rounded-tr-[5rem] h-[30rem]'>
                <div
                    style={{ backgroundImage: `url(${circle})` }}
                    class='bg-cover'
                >
                    <div>
                        {/* <img className='size-64' src={circle} alt="" /> */}
                        <h2 class='text-2xl text-slate-100 font-mono text-center pb-5 pt-[10rem]'>
                            State of the Art Infrastructure
                        </h2>
                        <p class='text-slate-400 font-mono text-center text-sm font-light w-[18rem] pl-5 leading-normal'>
                            With reliability and speed in mind.Worldwide data centers provide the backbone for ultra-fast connectivity.This ensures your site will load instantly.No matter where your readers are, keeping your site competitive
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default State