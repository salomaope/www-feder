'use client'

import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="https://federalassociadoscadastro.com/wp-content/uploads/2024/01/Logo-com-fundo-transparente.png" 
              alt="Federal Associados" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Federal Associados</h1>
              <p className="text-sm text-gray-600">Você conectado</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">Planos</a>
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            <a 
              href="tel:21999293221" 
              className="flex items-center space-x-2 btn-primary"
            >
              <Phone className="w-4 h-4" />
              <span>(21) 99929-3221</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">Planos</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <a 
                href="tel:21999293221" 
                className="flex items-center justify-center space-x-2 btn-primary w-full"
              >
                <Phone className="w-4 h-4" />
                <span>(21) 99929-3221</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}