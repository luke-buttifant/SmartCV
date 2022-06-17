import React from 'react';

export default function Education(props){
    return(
        <>
<section id="education" >
        <div className='flex flex-col gap-2'>

        <h2 className='font-semibold text-xl mt-5 text-gray-300'>Education</h2>
        <div>
        <input type="text"  placeholder="[School/University/College Name]" className="input input-bordered  min-w-full max-w-full bg-slate-900 placeholder-gray-400 text-white" />
        </div>
        <div>
        <input type="text"  placeholder="[Dates from]-[to]" className="input input-bordered  min-w-full max-w-full bg-slate-900 placeholder-gray-400 text-white" />
        </div>
        <div>
        <textarea className="textarea  min-w-full bg-slate-900 text-white placeholder-gray-400 max-w-full" onChange={(e) => { props.setAboutMe(e.target.value) }} placeholder="It’s okay to brag about your final grade, awards and honours. Feel free to summarise your coursework too."></textarea>
    </div> 
        <hr></hr>
        </div>
        </section>
        </>

    )
}