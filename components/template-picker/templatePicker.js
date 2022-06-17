import React from 'react';

export default function TemplatePicker(props){

    return(
        <>
                <section>
                <div className='flex flex-col p-2'>
                    <h1 className='font-bold text-center text-white'>Templates</h1>
                   
                        <div>
                        <div class="card w-full bg-base-100 shadow-xl image-full mt-10">
  <figure><img src="/img/blue-gray-cv.png" alt="Shoes" /></figure>
  <div class="card-body mt-28">
    <h2 class="card-title">Blue Gray CV</h2>
      <button class="btn btn-primary">Use</button>
    </div>
  </div>
</div>
                        </div>
                </section>
        </>

    )
}