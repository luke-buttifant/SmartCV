import React from 'react';

export default function Education(props){
    return(
        <>
<section id="location" className='grid gap-3'>
        
        <hr></hr>
        <h2 id='location' className='font-semibold text-xl'>Location</h2>
        <div>
        <input type="text"  placeholder="Full Name" className="input input-bordered  min-w-full max-w-xs bg-slate-900" />
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <div>
        <input type="text"  placeholder="Full Name" className="input input-bordered  min-w-full max-w-xs bg-slate-900" />
        </div>
        <div>
        <input type="text"  placeholder="Full Name" className="input input-bordered  min-w-full max-w-xs bg-slate-900" />
    </div> 
        </div>
        <div className='grid grid-cols-2 gap-6'>
        <div>
        <input type="text"  placeholder="Full Name" className="input input-bordered  min-w-full max-w-xs bg-slate-900" />
        </div>
        <div>
        <input type="text"  placeholder="Full Name" className="input input-bordered  min-w-full max-w-xs bg-slate-900" />
    </div> 
        </div>
        <hr></hr>
        </section>
        </>

    )
}