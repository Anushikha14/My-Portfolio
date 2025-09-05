import React from 'react'


function Hero() {
  return (
    <section id="home" className="min-h-screen flex item-center bg-gradient-to-br from-bg-black to-bg-black pt-20 relative overflow-hidden">

      <div className="absolute insert-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-700/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-pink-700/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols gap-16 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <p className={`text-pink-600 font-semibold text-lg transition-all duration-1000`}>
                        Get Ready to Start Work
                    </p>
                    <h2 className={`text-2xl md:text-3xl gap-2 font-black leading-tight transition-all duration-100 delay-200`}>
                        <div>
                        <span className={`text-white`}>I'm</span>
                        <span className={`text-white`}> Anushikha</span><br />
                        <span className={`text-4xl text-pink-700`}>Frontend Developer &</span><br/>
                        <span className={`text-4xl text-pink-700`}>UI/UX Designer</span>
                        </div>
                    </h2>
                    
                    <p className="text-gray-300 text-lg leadind-relaxed max-w-lg transition-all duration-1000 delay-400">
                        Hi, I'm Anushikha, a passionate Frontend Developer and UI/UX Designer with a creative mindset and a strong foundation in front-end technologies. I specialize in crafting user-friendly digital experiences that are both visually appealing and functionally effective.
                    </p>

                    <button className='bg-pink-700 text-white px-8 py-4 roumded-lg hover:bg-pink-800 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105'>Know More</button>
                </div>
                
            </div>
            <div></div>
        </div>
      </div>

    </section>
  )
}

export default Hero