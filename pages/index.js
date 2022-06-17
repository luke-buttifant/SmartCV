/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Editor from "../components/editor/editor";
import Pdf from "../components/PDF/pdf";
import TemplatePicker from "../components/template-picker/templatePicker";

export default function Index() {
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [web, setWeb] = useState("")
    const [aboutMe, setAboutMe] = useState("")

    useEffect(() => {
      console.log(name)
    }, [name])

  return (
    <>
    <div className="grid grid-cols-10">
      <div  id="options" className="min-w-[40%] xl:col-span-4 xl:grid hidden min-h-[100%]"><Editor setName={setName} setDob={setDob} setJob={setJob} setEmail={setEmail} setPhone={setPhone} setAboutMe={setAboutMe} setWeb={setWeb}/></div>
     <div className="col-span-10 xl:col-span-5"><Pdf name={name} dob={dob} job={job} email={email} phone={phone} aboutMe={aboutMe} web={web}/></div>
     <div className="col-span-[1.5] xl:grid hidden bg-gray-800">
    
    <TemplatePicker />
     </div>

     </div>
     

    </>
  );
}
