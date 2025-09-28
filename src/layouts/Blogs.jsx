import React, { useState, useEffect } from 'react';
import { getMediumFeed } from '../services/blogService.js';
import { formatDate } from '../utils/formatDate.js';
import { sliceString, readingTime } from '../utils/stringUtils.js';
import Icons from '../components/Icons';


export default function Blogs (){
  const [medium, setMedium] = useState(null);

  // get data from Medium
  useEffect(() => {
    getMediumFeed()
      .then((data) => setMedium(data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <>
      <section id="blog" className="bg-slate-100 pb-16">
      <div className="mx-auto container">
        <div className="px-5 text-center">
          <h4 className="font-bold text-lg text-primary mb-3 pt-14">Blog</h4>
          <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
          <p className="font-medium text-md text-secondary mb-12 md:text-lg">Saya  juga menulis  blog di  platform <span className="text-dark font-semibold" >Medium</span> untuk mengulas  pemahaman saya dibidang teknologi . Jika kamu tertarik juga mengenai bidang ini saya rasa artikel ini akan sangat relevan untukmu. </p>
          
        </div>
        
       {/* Scroll container */}
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide mx-4">
          
          {/* Card medium */}

          {medium ? medium.items.map(item => ( 
            <div key={item.link} className="bg-white rounded-2xl shadow-lg border border-gray-200 min-w-[280px] max-w-xs flex-shrink-0">
            <div className="px-6 pt-4 pb-2 flex">
              <div className="text-sm text-gray-700">{readingTime(item.content)} min read</div>
              
            </div>
            
          
            <div className="border-t border-gray-200"></div>
            
          
            <div className="grid grid-cols-[1fr_48px]">
              <div className="p-6">
                <h1 className="font-extrabold text-2xl leading-tight text-gray-900">
                  {item.title}
                </h1>
                <p className="mt-4 text-gray-600 text-base">
                  {sliceString(item.description, 90)}<span className="font-extrabold">...</span>
                </p>
              </div>
              <div className="flex items-center justify-center border-l border-gray-300">
                <div className="transform -rotate-90 whitespace-nowrap">
                  <span className="text-sm text-gray-700"><span className="font-semibold">{formatDate(item.pubDate)}</span> | medium.com/@hiroba</span>
                </div>
              </div>
            </div>
            
          
            <div className="border-t border-gray-200"></div>
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 mr-3"><img src={medium ? medium.feed.image : "../../public/assets/favicon.ico"} alt="" className="rounded-full mx-auto" /></div>
                <div className="text-lg text-gray-800 font-medium">{item.author}</div>
              </div>
              <div className="text-xl font-serif text-gray-800"><a href={item.link} className="font-medium text-sm text-center text-white bg-black py-2 px-4 rounded-lg hover:opacity-80">Read Blog</a></div>
            </div>
          </div>

          )) : "loading..."}
         
          
          {/* Card blogspot
          <div className="min-w-[280px] max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">

            <div className="bg-slate-800 flex items-center justify-center h-40">
              <img src="hiroba.png" alt="" />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">
                Simple Linear Regression Algoritma ML
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Penggunaan algoritma regresi linear dalam machine learning m...
              </p>

              <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="bg-orange-500 text-white rounded-md p-1">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                      <path d="M19 0H5C2.8 0 1 1.8 1 4v16c0 2.2 1.8 4 4 4h14c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-4 18H8c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1z" />
                    </svg>
                  </span>
                  <span>Hiroba</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10m-12 0a9 9 0 1018 0 9 9 0 00-18 0z"
                    />
                  </svg>
                  <span>19 Jun 2025</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium">
                Read on Blogger
              </button>
            </div>
          </div>
          */}
        </div>
      </div>
      </section> 
    </>

  )
}
