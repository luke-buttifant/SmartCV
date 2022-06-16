import React from 'react';
import TextField from '@mui/material/TextField';

export default function Location(props){
    return(
        <>
<section id="location" className='grid gap-3'>
        <div>
        <TextField fullWidth id="outlined-basic" label="Headline" variant="outlined" size='small' />
        </div>  
        <div>
        <TextField multiline minRows={6} fullWidth id="outlined-basic" label="Summary" variant="outlined" size='small' />
        </div>
        <hr></hr>
        <h2 id='location' className='font-semibold text-xl'>Location</h2>
        <div>
        <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" size='small' />
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <div>
        <TextField fullWidth id="outlined-basic" label="City" variant="outlined" size='small' />
        </div>
        <div>
        <TextField fullWidth id="outlined-basic" label="Region" variant="outlined" size='small' />
    </div> 
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <div>
        <TextField fullWidth id="outlined-basic" label="Country" variant="outlined" size='small' />
        </div>
        <div>
        <TextField fullWidth id="outlined-basic" label="Postal Code" variant="outlined" size='small' />
    </div> 
        </div>
        <hr></hr>
        </section>
        </>

    )
}