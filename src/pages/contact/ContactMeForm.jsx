import React, { useRef } from "react";

const ContactMeForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      messageRef.current.value
    );
  };
  return (
    <div className="w-full flex flex-col items-center my-4">
      <h1 className="text-2xl font-bold border-4 border-black py-1 px-10">
        Contact
      </h1>

      <div className="w-1/4 my-6">
        <form
          action=""
          className="flex flex-col"
          onSubmit={handleContactSubmit}
        >
          <label htmlFor="name" className="mx-2">
            Full Name
          </label>
          <input
            type="text"
            ref={nameRef}
            id="name"
            className="p-2 m-2 border-1 border-black rounded-lg"
          />
          <label htmlFor="email" className="mx-2">
            Email Address
          </label>
          <input
            type="text"
            ref={emailRef}
            id="email"
            className="p-2 m-2 border-1 border-black rounded-lg"
          />
          <label htmlFor="message" className="mx-2">
            Message
          </label>
          <textarea
            id="message"
            ref={messageRef}
            className="p-2 m-2 border-1 border-black rounded-lg"
          />
          <button className="bg-blue-950 m-2 p-2 text-white rounded-lg text-md font-bold hover:bg-gradient-to-b from-blue-600 cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMeForm;
