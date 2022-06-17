import React from "react";
import { useRouter } from "next/router";
import {CgProfile} from "react-icons/cg"
import {BiCurrentLocation, BiHome} from "react-icons/bi"

export default function Sidebar() {
  return (
    <>


      <aside className="w-16 fixed z-50" aria-label="Sidebar">
        <div className=" py-4 px-3 bg-gray-900 rounded-lg dark:bg-gray-800 min-h-[80vh] float-left shadow-2xl mt-20 ml-2">
        <a href="https://smart-iv.software"  className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700">
          <BiHome size={35}/>
                
              </a>
              <hr></hr>
          <ul className="space-y-2 mt-[20vh]">
            <li className="tooltip tooltip-right" data-tip="Basic">
              <a href="#basics" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700">
                <CgProfile size={30} />
                
              </a>
            </li>
            <li className="tooltip tooltip-right" data-tip="Location">
              <a href="#location" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700">
                <BiCurrentLocation className="text-white" size={30} />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                
              </a>
            </li>
          </ul>
        </div>
      </aside>


    </>
  );
}
