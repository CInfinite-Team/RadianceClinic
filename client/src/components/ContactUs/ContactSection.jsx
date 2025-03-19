import React from "react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <>
      <div className="flex flex-col overflow-hidden relative py-20 items-center  w-screen  gap-10 min-h-screen bg-[#FDF2FF] ">
        <h2
          className=" font-bold font-ElMessiri text-[#554075] leading-tight text-center px-1 z-10 "
          style={{ fontSize: "clamp(36px,4vw,55px)" }}
        >
          What Is Your Query
        </h2>
        <p className="text-sm sm:text-base w-[97%] md:w-[80%] lg:w-[60%] xl:w-[60%] text-center text-[#554075] z-10">
        Ready to transform your hair or skin? Reach out to Radiance Skin Clinic Nagpur for expert hair transplants and advanced skin treatments. Fill out the form below to book your consultation or ask about hair transplant costs in Nagpur!            </p>

            <ContactForm/>


      </div>
    </>
  );
}

export default ContactSection;
