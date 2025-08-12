import Icons from '../components/Icons';

export default function About (){
  return (
  <>
   <section id="about" className="pt-30 pb-32">
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-10 lg:w-1/2">
          <h4 className="pt-10 font-bold uppercase text-primary text-lg mb-3 lg:text-2xl">Tentang saya</h4>
          <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Ketertarikan Dibidang Teknologi Digital</h2>
          <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
            Saya adalah mahasiswa Ilmu Komputer dengan minat besar di bidang Artificial Intelligence, Data Science, dan Web Development. Walaupun saya masih dalam tahap awal pembelajaran, saya sangat antusias untuk terus mengembangkan pemahaman saya tentang data,  pemrograman, dan bagaimana teknologi bisa digunakan untuk menyelesaikan masalah nyata.
          </p>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-20">Mari berteman</h3>
          <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
           Mari saling terhubung lebih jauh!. Saya sering berbagi cerita, ide, dan update terbaru. Ikuti saya dan kita bisa saling berbagi inspirasi! 
          </p>
          <div className="flex items-center">
            {/* Instagram */}
            <a href="https://www.instagram.com/hiroba___/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white" >
              <Icons iconName="ig" className="w-6 h-6" />
            </a>

            {/* Github */}
            <a href="https://www.github.com/hikz/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white" >
              <Icons iconName="github" className="w-6 h-6" />        
            </a>

            {/* Medium */}
            <a href="https://www.medium.com/@hiroba/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white" >
              <Icons iconName="medium" className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hiroba-ikhtiyar-400349305" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white" >
              <Icons iconName="linkedin" className="w-6 h-6" />
            </a>

          </div>
        </div>
      </div>
    </div>
   </section>

  </>
  );
}
