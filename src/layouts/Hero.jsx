export default function Hero() {
  return (
  <section id="home" className="pt-32 bg-hiroba bg-cover h-[600px] bg-no-repeat bg-center md:bg-bottom"
    style={{ backgroundImage: `url('${import.meta.env.BASE_URL}/assets/hiroba.png')`}}>
    
    <div className="container mx-auto">
      <div className="w-full flex items-center ">
        <div className="self-center z-10 text-white h-full px-4 ">
          <h1 className="text-primary text-base font-semibold md:text-2xl">Hello There! 👋🏻, I'm</h1>
          <h1 className=" font-bold text-4xl my-2 max-w-xl md:text-6xl">Hiroba Ikhtiyar </h1>
          <h2 className="text-secondary font-medium text-lg mb-6 md:text-2xl">Student & <span className="text-white ">Lifelong Learner</span></h2>
          <p className="font-bold text-xl mb-6 leading-relaxed text-[#FFA165] text-outline md:text-2xl md:w-2/3 lg:w-1/2">Exploring tech through hands-on projects is my way of feeding my curiosity and creativity</p>
          <a href="#contact" className="w-1/2 text-base font-semibold text-white text-center bg-primary py-3 px-8 rounded-full md:w-1/3 lg:w-1/3 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Contact me</a>
        </div>
      </div>
    </div>
    
  </section>

  );
}



