import React from "react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <>
      <div className="flex flex-col overflow-hidden relative py-20 items-center justify-between w-screen  gap-12 min-h-screen bg-[#FDF2FF] ">
        <h2
          className=" font-bold font-ElMessiri text-[#554075] leading-tight text-center px-1 z-10 "
          style={{ fontSize: "clamp(36px,4vw,55px)" }}
        >
          Write Us Your Thoughts
        </h2>


            <ContactForm/>


      </div>
    </>
  );
}

export default ContactSection;
