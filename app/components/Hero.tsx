'use client'

import { Smartphone, Wifi, TrendingDown } from 'lucide-react'

export default function Hero() {
  const handleCTAClick = () => {
    window.open('https://bit.ly/contatofederalassociados', '_blank')
  }

  return (
    <section className="pt-24 pb-16 gradient-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Reduza sua conta de
              <span className="block text-yellow-300">internet móvel</span>
              <span className="block">em até 60%</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Obtenha até 300GB de internet, com apps que não consomem sua franquia
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleCTAClick}
                className="btn-secondary text-lg px-8 py-4"
              >
                QUERO ECONOMIZAR AGORA MESMO
              </button>
              <button 
                onClick={() => window.open('https://bit.ly/DetalhesCampanhaFederal', '_blank')}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Falar com um Especialista
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="animate-slide-up">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                  <TrendingDown className="w-8 h-8" />
                </div>
                <p className="text-sm font-semibold">Até 60% de economia</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                  <Wifi className="w-8 h-8" />
                </div>
                <p className="text-sm font-semibold">Até 300GB</p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center backdrop-blur-sm">
                  <Smartphone className="w-8 h-8" />
                </div>
                <p className="text-sm font-semibold">Apps ilimitados</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Pessoa usando smartphone" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}