import React from 'react';
import Basic from './basic';
import Education from './education';
import Location from './location';

export default function Editor(props){

    return(
    <div className="min-w-[20%] xl:min-w-[30%] max-w-[40%] min-h-[100%] overflow-y-auto max-h-screen bg-gray-800 float-left p-2 pl-24 shadow-lg fixed z-10">
        <h1 className='font-bold text-white text-2xl'>SmartCV - Resume Builder</h1>
        <div className='p-4 bg-gray-700 mt-2 rounded-2xl shadow-md shadow-white min-h-screen'>
        <Basic  setName={props.setName} setEmail={props.setEmail} setDob={props.setDob} setPhone={props.setPhone} setAboutMe={props.setAboutMe} setJob={props.setJob} setWeb={props.setWeb} />
        <Education />
        <Location />
        
        </div>

    </div>
       
    )
}