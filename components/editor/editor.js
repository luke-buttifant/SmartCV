import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Basic from './basic';
import Location from './location';

export default function Editor(props){

    return(
    <div className="min-w-full min-h-screen overflow-y-auto max-h-screen bg-slate-100 float-left p-10 pl-20 shadow-lg">
        <Basic  setName={props.setName} setEmail={props.setEmail} setDob={props.setDob} setPhone={props.setPhone} setAboutMe={props.setAboutMe} />
        <Location />
    </div>
       
    )
}