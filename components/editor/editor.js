import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Basic from './basic';
import Location from './location';

export default function Editor(){
    const [value, setValue] = useState(new Date());

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return(
    <div className="min-w-[30%] min-h-screen overflow-y-auto max-h-screen bg-gray-50 float-left p-10">

        <Basic handleChange={handleChange}  value={value}/>
        <Location />
    </div>
       
    )
}