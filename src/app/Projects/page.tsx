'use client'
import React, { useState } from 'react'

function Page() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      images: ['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg']
    },
    // Add more projects here
  ];

  const Carousel = ({ images }: { images: string[] }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className="relative">
        <img src={images[currentImage]} alt="Project Image" className="w-full h-auto object-cover" />
        <button onClick={nextImage} className="absolute top-1/2 right-0 bg-gray-800 text-white p-2">Next</button>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <p>Here are some of the projects I have worked on:</p>
      {projects.map((project, index) => (
        <div key={index} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <Carousel images={project.images} />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;