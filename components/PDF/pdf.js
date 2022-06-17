import React, { useRef, useState, useEffect } from 'react';
import { Template, Form } from '@pdfme/ui';
import template from '../templates/template-1';
import Photo from "../../components/photo";
  
  export default function PDF(props){

    const ref = useRef();

    
      const inputs = [
        {
          "name": props.name,
          "photo": "",
          "experience-1": "[Company name] [Job title]\n[Dates from]-[to]\n[Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.] \n",
          "experience-2": "[Company name] [Job title]\n[Dates from]-[to]\n[Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.] \n",
          "experience-3": "[Company name] [Job title]\n[Dates from]-[to]\n[Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.] \n",
          "phone": `Tel: ${props.phone}`,
          "job-title": props.job,
          "education-1": "[School/University/College Name]\n[Dates from]-[to]\n[It’s okay to brag about your final grade, awards and honours. Feel free to summarise your coursework too.]\n",
          "education-2": "[School/University/College Name]\n[Dates from]-[to]\n[It’s okay to brag about your final grade, awards and honours. Feel free to summarise your coursework too.]",
          "website": `Web: ${props.web}`,
          "email": `Email: ${props.email}`,
          "profile": props.aboutMe,
          "hobby-1": "Hobby no.1",
          "hobby-2": "Hobby no.2",
          "hobby-3": "Hobby no.3"
        }
      ];
      
      

      const [form, setForm] = useState()
      useEffect(() => {
        setForm(new Form({ domContainer: ref.current, template, inputs }));
      }, [])

  
      useEffect(() => {
        if(form){
            form.setInputs([{
                "name": props.name,
                "photo": "",
                "experience-1": "[Company name] [Job title]\n[Dates from]-[to]\n[Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.] \n",
                "experience-2": "[Company name] [Job title]\n[Dates from]-[to]\n[Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.] \n",
                "experience-3": "[Company name] [Job title]\n[Dates from]-[to]\n[Describe your responsibilities and achievements in terms of impact and results. Use examples but keep it short.] \n",
                "phone": `Tel: ${props.phone}`,
                "job-title": props.job,
                "education-1": "[School/University/College Name]\n[Dates from]-[to]\n[It’s okay to brag about your final grade, awards and honours. Feel free to summarise your coursework too.]\n",
                "education-2": "[School/University/College Name]\n[Dates from]-[to]\n[It’s okay to brag about your final grade, awards and honours. Feel free to summarise your coursework too.]",
                "website": `Web: ${props.web}`,
                "email": `Email: ${props.email}`,
                "profile": props.aboutMe,
                "hobby-1": "Hobby no.1",
                "hobby-2": "Hobby no.2",
                "hobby-3": "Hobby no.3"
              }])
        }

      }, [props])

      useEffect(() => {
        if(typeof window !== "undefined"){
            var pdf = document.querySelector('#pdf-container').children[0];
            pdf.style.backgroundColor = ""
            pdf.classList.add("bg-slate-900")
            pdf.classList.add("pb-10")
          }
      }, [])


    return(
        <>
                <div ref={ref} id="pdf-container" className="min-w-[100%] mx-auto float-right">
        </div>
        
        </>
    )
  };