import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
      <section className='mt-60'>
        <h1 className='text-white text-4xl text-center mt-10 animate-bounce duration-500'><span>My</span> Pro<span>je</span>cts</h1>
        <div className='text-white justify-items-center mt-40 grid grid-cols-2 md:grid-cols-3 text-center'>
          <div className=" items-center justify-center p-4">
            <Image
              src="/calculator.png" alt="calculator" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500" />
            <a href="#" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Calculator</h3></a>
          </div>
          <div className=" items-center justify-center p-4">
            <Image
              src="/resume-builder.png" alt="resume-builder" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500" />
            <a href="#" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Resume-Builder</h3></a>
          </div>
          <div className=" items-center justify-center p-4">
            <Image
              src="/periodic-table.png" alt="periodic-table" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500" />
            <a href="#" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Periodic Table</h3></a>
          </div>
          <div className=" items-center justify-center p-4">
            <Image
              src="/chess-game.png" alt="chess-game" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500" />
            <a href="#" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Chess Game Table</h3></a>
          </div>
          <div className=" items-center justify-center p-4">
            <Image
              src="/semester-table.png" alt="semester-table" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500" />
            <a href="#" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Semester Table</h3></a>
          </div>
          <div className=" items-center justify-center p-4">
            <Image
              src="/registration-form.png" alt="registration-form" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500" />
            <a href="#" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Registration Form</h3></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;