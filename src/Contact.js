import React from "react";
function Contact() {
  return (
    <div className="h-screen">
      <div className="flex justify-center font-bold text-white">
        Contact
      </div>
      <form className="flex justify-center" action="https://formsubmit.co/arvinbenipal113@gmail.com" method="POST">
        <div className="flex flex-col pb-5">
          <label className="text-white pt-3" htmlFor="name">Name</label>
          <input type="name" id="name" placeholder="John Doe" name="name" className="bg-sky-50 opacity-90 form-input px-5 py-1 rounded-md" required />
          <label className="text-white pt-3" htmlFor="name">Email</label>
          <input type="email" id="email" placeholder="abc123@gmail.com" name="name" className="bg-sky-50 opacity-90 form-input px-5 py-1 rounded-md" required />
          <label className="text-white pt-3" htmlFor="name">Message</label>
          <div className="">
            <input type="message" id="message" placeholder="Message" name="name" className="bg-sky-50 opacity-90 w-full py-3 px-5 pb-20 placeholder-gray-400 rounded-md" ></input>
          </div>
          <div className="pt-5">
          <button className="px-5 bg-red-500 rounded-full text-white text-sm">Send</button>
          </div>
          
        </div>
      </form>
    </div>
  );
}

export default Contact;