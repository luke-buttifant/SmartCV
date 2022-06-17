import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function Basic(props){
    return(
        <>
                <section id='basics' className='grid grid-cols-1 gap-3'>
                <div ><h1  className="font-semibold text-xl">Basics</h1></div>
                <div className="grid grid-cols-2"> 
                <div className='mx-auto'><img className='w-20 rounded-full' src='/img/defaultDP.jpg'></img></div>
                <div className="grid grid-rows-2 gap-2">
                    <div>
                    <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" size='small' onChange={(e) => {props.setName(e.target.value)}}/>
                    </div>
                    <div>
                        <button className="min-w-[100%] bg-red-600 min-h-20">Test</button>
                    </div>
                </div>
                </div>
                <div>
                <TextField onChange={(e) => {props.setEmail(e.target.value)}} fullWidth id="outlined-basic" label="Email Address" variant="outlined" size='small' />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                    <TextField fullWidth id="outlined-basic" label="Website" variant="outlined" size='small' />
                    </div>
                    <div>
                    <TextField InputLabelProps={{ shrink: true }} type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={(e) => {props.setPhone(e.target.value)}} fullWidth id="outlined-basic" label="Phone Number" variant="outlined" size='small' />
                    </div>
                </div>
        <div>
        <TextField onChange={(e) => {props.setAboutMe(e.target.value)}} multiline minRows={6} fullWidth id="outlined-basic" label="About Me" variant="outlined" size='small' />
        </div>
                <hr></hr>
                </section>
        </>

    )
}