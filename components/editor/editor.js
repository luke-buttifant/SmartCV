import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Basic from './basic';
import Location from './location';

export default function Editor(props){

    return(
    <div className="min-w-full min-h-screen overflow-y-auto max-h-screen bg-gray-600 float-left p-10 pl-24 shadow-lg">
        <h1 className='text-4xl font-bold'>SmartCV - Resume Builder</h1>
        <div className='p-10 bg-gray-700 mt-10 rounded-2xl shadow-lg shadow-white'>
        <Basic  setName={props.setName} setEmail={props.setEmail} setDob={props.setDob} setPhone={props.setPhone} setAboutMe={props.setAboutMe} />
        <Location />
        </div>
    </div>
       
    )
}