import React, { useState, useEffect } from 'react';
import { getUserAndRepos} from '../services/githubService.js';
import { formatDate } from '../utils/formatDate.js';
import Icons from '../components/Icons';

export default function Projects (){
  const [github, setGithub] = useState(null);

  // get data from github API
  useEffect(() => {
    getUserAndRepos()
      .then((data) => setGithub(data))
      .catch((err) => console.error(err));
  }, []);
  

  
  return (
    <>
      <section id="repo" className="pt-32 pb-16 bg-dark">
        <div className="container mx-auto">
        <div className="text-center">
            <h4 className="font-semibold text-lg text-primary mb-3 -mt-16">Repository</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Recent Projects</h2>
            <p className="font-medium text-md text-secondary mb-12 md:text-lg">Saya suka mengeksplorasi ide-ide baru dalam proyek pengembangan dan mendokumentasikannya. Saya menikmati proses pembuatan proyek-proyek baru dan selalu membagikannya di GitHub untuk referensi dan kolaborasi</p>
            <div className="bg-white p-3 rounded-lg mb-2 shadow-lg max-w-[300px] flex flex-wrap mx-auto text-center md:hidden">
                
                <div className="w-1/2  ">
                    
                    <a href="http://github.com/hikz" target="_blank" className="w-full block rounded-full"><img src={github ? github[0].avatar_url : "../../public/assets/favicon.ico"} alt="my github profil" className="rounded-full w-[120px] h-[120px] md:text-center mx-auto" /></a>
                    
                </div>
                
                <div className="w-1/2 mt-5 md:w-full">
                    <p className="text-2xl font-semibold text-gray-800 -mb-2 ">{github ? github[0].name : "Loading..."}</p>
                    <p className="text-sl text-slate-700">{github ? github[0].login : "Loadung..."} • him/he</p>
                    <p className="text-md font-bold">🗃️ repos : {github ? github[0].public_repos : "Loading..."}</p>
                </div>
                <div className="w-full text-center">
                    <p>{github ? github[0].bio : "Loading..."}</p>
                </div>
            </div>
            
        </div>
        
          <div className="overflow-x-auto">
            <div className="flex space-x-4 py-4">
                <div className="min-w-[300px] max-w-[350px] ml-4 rounded-lg bg-white flex flex-wrap p-6 rounded-lg w-max shadow-lg transform transition-all hover:scale-105  hidden sm:flex sm:flex-wrap">
                    <div className="w-1/2  ">
                        
                        <a href="http://github.com/hikz" target="_blank" className="w-full block rounded-full"><img src={github ? github[0].avatar_url : "../../public/assets/favicon.ico"} alt="my github profil" className="rounded-full mx-auto" /></a>
                        
                  </div>
                    
                    <div className="w-1/2 mt-4 pl-4 ">
                        <p className="text-2xl font-semibold text-gray-800 -mb-2 ">{github ? github[0].name : "Loading..."}</p>
                        <p className="text-sl text-slate-700">{github ? github[0].login : "Loading..."} • him/he</p>
                        <p className="text-md font-bold">🗃️ repos : {github ? github[0].public_repos : "Loading..."}</p>
                    </div>
                    <div className="w-full text-center">
                        <p>{github ? github[0].bio : "Loading..."}</p>
                    </div>
                </div>
                

                {github ? github[1].map(repo => (          
                <div key={repo.id} className="min-w-[320px] max-w-[400px] bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 md:min-w-[400px]">
                    <div className="flex flex-wrap">
                        <p className="text-3xl font-semibold text-gray-800">{repo.full_name}</p>
                        {/* languages icons */                  
                            <Icons iconName={repo.language} className="w-6 h-6 mx-2" />          
                        }
                    </div>
                    <p className="text-gray-600 mt-4">{repo.description ? repo.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget nunc vitae nisi faucibus molestie non ullamcorper eros. Vivamus sed nunc sed est sagittis finibus."}</p>
                    <div className="flex flex-wrap">
                        <p className="w-1/2 pt-1">{formatDate(repo.created_at)}</p>
                        <a href={repo.homepage} className="font-medium text-sm text-center text-white bg-black py-2 px-4 rounded-lg hover:opacity-80">Try It Now</a>
                    </div>
                  
                </div>
                )) : "loading..."}

          </div>
        </div>
     </div>
    

      </section>

    </>
  )
}


