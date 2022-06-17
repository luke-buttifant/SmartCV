import React from 'react';

export default function Basic(props) {

    return (
        <>
            <section id='basics' className='grid grid-cols-1  gap-3'>
                <div ><h1 className="font-semibold text-xl text-gray-300">Basics</h1></div>
                <div className="flex flex-col gap-2">
                    <div><img className='w-20 rounded-full mx-auto' src='/img/defaultDP.jpg'></img></div>
                    <div><input type="text" onChange={(e) => { props.setName(e.target.value) }} placeholder="Full Name" className="input input-bordered  min-w-full max-w-full bg-slate-900 text-white placeholder-gray-400" /></div>
                </div>
                    <div>
                        <input type="email" onChange={(e) => { props.setEmail(e.target.value) }} placeholder="Email" className="input input-bordered  min-w-full max-w-full bg-slate-900 text-white placeholder-gray-400" />
                    </div>
                    <div>
                        <input type="text" onChange={(e) => { props.setJob(e.target.value) }} placeholder="Job Title" className="max-w-full input input-bordered  min-w-full max-w-full  bg-slate-900 text-white placeholder-gray-400" />
                    </div>
                    <div>
                        <input type="text" placeholder="Website" onChange={(e) => { props.setWeb(e.target.value) }} className="max-w-full input input-bordered  min-w-full bg-slate-900 text-white placeholder-gray-400" />
                    </div>
                    <div>
                        <input type="number" onChange={(e) => { props.setPhone(e.target.value) }} placeholder="Phone Number" className="max-w-full input input-bordered  min-w-full bg-slate-900 text-white placeholder-gray-400" />
                </div>
                <div>
                    <textarea className="textarea  min-w-full bg-slate-900 text-white placeholder-gray-400 max-w-full" onChange={(e) => { props.setAboutMe(e.target.value) }} placeholder="Bio"></textarea>
                </div>
                <hr></hr>
            </section>
        </>

    )
}