import React from 'react'
import Image from 'next/image';

function Page() {
  const workExperiences = [
    {
      company: 'Company A',
      title: 'Software Engineer',
      startDate: 'January 2020',
      endDate: 'Present',
      description: 'Worked on developing and maintaining web applications using React and Node.js.'
    },
    {
      company: 'Company B',
      title: 'Junior Developer',
      startDate: 'June 2018',
      endDate: 'December 2019',
      description: 'Assisted in the development of internal tools and contributed to the main product line.'
    }
    // Add more experiences as needed
  ];

  return (
    <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold underline my-4 text-cyan-400">My Work Experience</h1>
        <div className="space-y-4">
          
          {workExperiences.map((experience, index) => (
            <div className='flex '>
                  {/* <div>
                    <Image src="" alt="Work" width={400} height={400} className='w-1 text-white' />
                  </div> */}
                <div key={index} className="max-w-md px-8 py-4 bg-gray-500 text-white shadow-lg rounded-lg">
                  <h2 className="text-xl font-semibold">{experience.title} at {experience.company}</h2>
                  <p className=""><span className="font-medium">Duration:</span> {experience.startDate} - {experience.endDate}</p>
                  <p className="">{experience.description}</p>
                </div>
            </div>
            
          ))}
        </div>
    </div>
  )
}

export default Page