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
    const [aboutMe, setAboutMe] = useState("")

    useEffect(() => {
      console.log(name)
    }, [name])

  return (
    <>
    <div className="grid grid-cols-8">
      <div className="col-span-3"><Editor setName={setName} setDob={setDob} setJob={setJob} setEmail={setEmail} setPhone={setPhone} setAboutMe={setAboutMe} /></div>
     <div className="col-span-4"><Pdf name={name} dob={dob} job={job} email={email} phone={phone} aboutMe={aboutMe}/></div>
     <div className="col-span-1"><TemplatePicker /></div>
    </div>

    
    </>
  );
}
