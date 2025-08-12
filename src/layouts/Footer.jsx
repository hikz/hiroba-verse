import Icons from '../components/Icons';

export default function Footer (){

  return (
  <>
    <section className="bg-dark pt-24 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="font-bold font-4xl text-white mb-5">Hiroba Ikhtiyar</h2>
            <h3 className="font-bold text-2xl mb-2">Hubungi Kami</h3>
            <p><a href="mailto:hiroba.contact@gmail.com" className="text-primary">hiroba.contact@gmail.com</a></p>
            <p>Telegram: <a href="https://t.me/hirobaa" className="text-primary">@hirobaa</a></p>
            <p>Bandar Lampung</p>
            <p>Indonesia</p>
          </div>

          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
            <ul className="text-slate-300">
              <li>
                <a href="#blog" className="inline-block text-base hover:text-primary mb-3">Programming</a>
              </li>
              <li>
                <a href="#blog" className="inline-block text-base hover:text-primary mb-3">Machine Learning</a>
              </li>
               <li>
                <a href="#blog" className="inline-block text-base hover:text-primary mb-3">Experience</a>
              </li>
            </ul>
          </div>
      
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul className="text-slate-300">
              <li>
                <a href="#home" className="inline-block text-base hover:text-primary mb-3">Beranda</a>
              </li>
              <li>
                <a href="#about" className="inline-block text-base hover:text-primary mb-3">Tentang Saya</a>
              </li>
              <li>
                <a href="#repo" className="inline-block text-base hover:text-primary mb-3">Repository</a>
              </li>
              <li>
                <a href="#blog" className="inline-block text-base hover:text-primary mb-3">Blog</a>
              </li>
              <li>
                <a href="#contact" className="inline-block text-base hover:text-primary mb-3">Contact</a>
              </li>
            </ul>
          </div>
      
        </div>
    
    
        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
            {/* icon */}
            <a href="https://www.instagram.com/hiroba___/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:border-primary hover:bg-primary hover:text-white">
              { /* svg */}
               <Icons iconName="ig" className="w-6 h-6" />
            </a>
        
            <a href="https://www.github.com/hikz/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:border-primary hover:bg-primary hover:text-white">
              { /* svg */}
                <Icons iconName="github" className="w-6 h-6" />
            </a>
            <a href="https://www.medium.com/@hiroba/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:border-primary hover:bg-primary hover:text-white" >
              <Icons iconName="medium" className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hiroba-ikhtiyar-400349305" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-white text-white hover:border-primary hover:bg-primary hover:text-white" >
              <Icons iconName="linkedin" className="w-6 h-6" />
            </a>


          </div>
      
        </div>
    
        <p className="font-medium text-[0.75rem] text-slate-500 text-center">Dibuat oleh Hiroba, menggunakan React + Tailwind CSS</p>
      </div>
    </section>
  </>
  )
}
