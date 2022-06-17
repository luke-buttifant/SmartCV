import React from 'react';

export default function TemplatePicker(props){

    return(
        <>
                <section>
                <div className='flex flex-col p-2'>
                    <h1 className='font-bold text-center text-white'>Templates</h1>
                   
                        <div>
                        <div className="card w-full bg-base-100 shadow-xl image-full mt-10">
  <figure><img src="/img/blue-gray-cv.png" alt="Shoes" /></figure>
  <div className="card-body mt-28">
    <h2 className="card-title">Blue Gray CV</h2>
      <button className="btn btn-primary">Use</button>
    </div>
  </div>
</div>
                        </div>
                </section>
        </>

    )
}