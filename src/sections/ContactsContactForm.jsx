import React from 'react'

const ContactsContactForm = () => {
    return (
        <section className="md:p-8">


            <div className="bg-gradient max-w-screen py-12 rounded-xl">

                <form className="bg-white/70 border-3 rounded-md border-accent px-6 flex flex-col gap-5 max-w-lg md:max-w-2xl  mx-auto text-sm md:text-lg rounded-xl">
                    <div >
                        <h2 className="subheading">Contact Us</h2>
                    </div>
                   <div className="flex flex-col gap-5 md:flex-row justify-between">
                       <div className="flex flex-col gap-4 w-full">
                           <label className="font-semibold  leading-[1.5]" htmlFor="firstName">First Name</label>
                           <input className="bg-white rounded-sm border-1 border-gray-400  font-semibold py-2 px-4"  type="text" placeholder="John"/>
                       </div>
                       <div className="flex flex-col gap-4  w-full">
                           <label className="font-semibold  leading-[1.5]" htmlFor="lastName">Last Name</label>
                           <input className="bg-white rounded-sm border-1 border-gray-400  font-semibold py-2 px-4" type="text" placeholder="Doe"/>
                       </div>
                   </div>
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold  leading-[1.5]" htmlFor="email">Email</label>
                        <input className="bg-white rounded-sm border-1 border-gray-400  font-semibold py-2 px-4" type="text" placeholder="johndoe@company.com"/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold  leading-[1.5]" htmlFor="phone">Phone</label>
                        <input className="bg-white rounded-sm border-1 border-gray-400  font-semibold py-2 px-4" type="text" placeholder="+91 9748 145368"/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="font-semibold  leading-[1.5]" htmlFor="message">Message</label>
                        <textarea
                            className="bg-white rounded-sm border border-gray-400 font-semibold py-2 px-4 text-gray-500 text-lg w-full h-40 resize-none"
                            placeholder="Write your Message here"
                        />
                    </div>
                    <button className="bg-black/90 py-2 px-4 text-accent border-2 border-accent rounded-md max-w-xs w-full mx-auto my-8">Submit</button>
                </form>
            </div>
        </section>
    )
}
export default ContactsContactForm
