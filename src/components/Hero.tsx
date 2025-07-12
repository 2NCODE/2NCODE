import {Code2, Palette, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden bg-indigo-950">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="/assets/Technology Background Video Loop For Website.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 via-indigo-900/40 to-indigo-950/90"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="text-white font-medium">Web & mobile Development Experts</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Crafting Digital
            <span className="relative">
              <span className="relative z-10 text-indigo-300"> Experiences</span>
              <svg className="absolute bottom-0 left-0 w-full h-3 text-indigo-400/30 -z-10" viewBox="0 0 300 12" fill="currentColor">
                <path d="M1 5.5Q75 3 150 6T300 5.5" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into reality with our expert Software Developper.<br /> We create
            high-performance Web & mobile applications that drive growth and engage customers.
          </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="inline-flex items-center px-6 py-3 border-2 border-red-500 text-white rounded-full hover:bg-red-500/10 transition-colors text-lg font-medium backdrop-blur-sm">
              IT Solutions
            </button>
            <button className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-white rounded-full hover:bg-green-500/10 transition-colors text-lg font-medium backdrop-blur-sm">
              AI Consulting
            </button>
            <button className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-white rounded-full hover:bg-blue-500/10 transition-colors text-lg font-medium backdrop-blur-sm">
              Web & Mobile Softwares
            </button>
            <button className="inline-flex items-center px-6 py-3 border-2 border-yellow-500 text-white rounded-full hover:bg-yellow-500/10 transition-colors text-lg font-medium backdrop-blur-sm">
              E-commerce Solutions
            </button>
            </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Code2 className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-indigo-200">Maintainable and scalable solutions built with best practices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Palette className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Modern Design</h3>
              <p className="text-indigo-200">Beautiful, responsive interfaces that engage users</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-indigo-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Performance</h3>
              <p className="text-indigo-200">Optimized for speed and exceptional user experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;