import React from 'react';

export default function Basic(props){

    return(
        <>
                <section id='basics' className='grid grid-cols-1 gap-3'>
                <div ><h1  className="font-semibold text-xl">Basics</h1></div>
                <div className="grid grid-cols-2"> 
                <div className='mx-auto'><img className='w-20 rounded-full' src='/img/defaultDP.jpg'></img></div>
                <div className="grid grid-rows-2 gap-2">
                    <div>
                    <input type="text" onChange={(e) => {props.setName(e.target.value)}} placeholder="Full Name" className="input input-bordered  min-w-full max-w-xs bg-slate-900" />
                    </div>
                    <div>
                        <button className="min-w-[100%] min-h-20 bg-slate-900 rounded-lg py-2 text-gray-500">Edit Picture</button>
                    </div>
                </div>
                </div>
                <div>
                    <input type="email" onChange={(e) => {props.setEmail(e.target.value)}}placeholder="Email" className="input input-bordered  min-w-full max-w-xs bg-slate-900" />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                    <div>
                    <input type="text" placeholder="Website" className="input input-bordered  min-w-full bg-slate-900" />
                    </div>
                    <div>
                    <input type="number" onChange={(e) => {props.setPhone(e.target.value)}} placeholder="Phone Number" className="input input-bordered  min-w-full bg-slate-900" />
                    </div>
                </div>
        <div>
        <textarea className="textarea  min-w-full bg-slate-900" onChange={(e) => {props.setAboutMe(e.target.value)}} placeholder="Bio"></textarea>
        </div>
                <hr></hr>
                </section>
        </>

    )
}