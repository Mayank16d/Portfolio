import React from 'react'

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-400">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Get in Touch</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
                </form>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Direct Contact</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li className=' text-gray-400'>Email: <a href="mailto:nandwanimayank16d@gmail.com" className="text-indigo-600 hover:text-indigo-800">nandwanimayank16d@gmail.com</a></li>
                    <li className=' text-gray-400'>Phone: <a href="tel:+917878910554" className="text-indigo-600 hover:text-indigo-800">+91 7878910554</a></li>
                    <li className=' text-gray-400'>LinkedIn: <a href="https://www.linkedin.com/in/mayank-nandwani1612/" className="text-indigo-600 hover:text-indigo-800">Mayank Nandwani</a></li>
                    <li className=' text-gray-400'>GitHub: <a href="https://github.com/Mayank16d" className="text-indigo-600 hover:text-indigo-800">Mayank16d</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContactPage