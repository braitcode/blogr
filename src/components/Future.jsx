import React from 'react'
import FutureImg from "../assets/images/illustration-editor-desktop.svg"

const Future = () => {
  return (
    <div className='future-body h-full w-full pb-10'>
        <h1 className='future-header text-center text-blue-950 text-2xl font-semibold absolute top-full left-[40rem]'>Designed for the Future</h1>
        <div className="future-main w-full mt-10 md:flex md:items-center md:pl-36 md:relative ">
            <div className="future-content md:w-1/2 flex flex-col gap-10">
                <div className=" text-center md:flex md:flex-col md:gap-4 md:text-start">
                <h3 className='sub-header text-blue-950 text-xl font-semibold'>Introducing an extensible editor</h3>
                <p className='para m-auto w-9/12 md:w-10/12 md:m-0'>Blogr features an exceedingly intutive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of blog.</p>
                </div>
                <div className=" text-center flex flex-col gap-4 md:text-start">
                    <h3 className='sub-header  text-blue-950 text-xl font-semibold'>Robust content management</h3>
                    <p className='para m-auto w-9/12 md:w-10/12 md:m-0'>flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
                </div>
            </div>
            <div className="future-img w-1/2">
            <img src={FutureImg} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Future