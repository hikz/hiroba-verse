import React, { useState, useEffect } from 'react';
import { getMediumFeed } from '../services/mediumService.js';
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
          
          {/* Card */}

          {medium ? medium.items.map(item => ( 
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 min-w-[280px] max-w-xs flex-shrink-0">
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
          
        </div>
      </div>
      </section> 
    </>

  )
}
