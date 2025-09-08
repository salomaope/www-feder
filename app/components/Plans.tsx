'use client'

import { Check, Star } from 'lucide-react'
import { useState } from 'react'

export default function Plans() {
  const [activeTab, setActiveTab] = useState('individual')

  const plans = {
    individual: [
      {
        name: 'Plano Básico',
        price: 'R$ 29,90',
        originalPrice: 'R$ 49,90',
        data: '50GB',
        features: [
          'WhatsApp, Instagram e Facebook ilimitados',
          'Ligações ilimitadas',
          'SMS ilimitado',
          'Suporte 24h'
        ],
        popular: false
      },
      {
        name: 'Plano Premium',
        price: 'R$ 49,90',
        originalPrice: 'R$ 89,90',
        data: '150GB',
        features: [
          'Todos os apps sociais ilimitados',
          'YouTube e Netflix sem consumir franquia',
          'Ligações ilimitadas',
          'SMS ilimitado',
          'Suporte prioritário 24h',
          'Portabilidade gratuita'
        ],
        popular: true
      },
      {
        name: 'Plano Ultra',
        price: 'R$ 79,90',
        originalPrice: 'R$ 149,90',
        data: '300GB',
        features: [
          'Internet ultra-rápida',
          'Todos os apps ilimitados',
          'Streaming sem limite',
          'Ligações internacionais',
          'SMS ilimitado',
          'Suporte VIP 24h',
          'Portabilidade gratuita',
          'Desconto em família'
        ],
        popular: false
      }
    ],
    family: [
      {
        name: 'Família Conectada',
        price: 'R$ 89,90',
        originalPrice: 'R$ 159,90',
        data: '200GB compartilhados',
        features: [
          '4 linhas incluídas',
          'Apps sociais ilimitados',
          'Controle parental',
          'Ligações ilimitadas',
          'SMS ilimitado para todos',
          'Suporte familiar 24h'
        ],
        popular: false
      },
      {
        name: 'Família Premium',
        price: 'R$ 149,90',
        originalPrice: 'R$ 249,90',
        data: '500GB compartilhados',
        features: [
          '6 linhas incluídas',
          'Todos os apps ilimitados',
          'Streaming premium',
          'Controle parental avançado',
          'Ligações internacionais',
          'SMS ilimitado para todos',
          'Suporte VIP familiar',
          'Backup em nuvem'
        ],
        popular: true
      }
    ]
  }

  const handlePlanSelect = () => {
    window.open('https://bit.ly/contatofederalassociados', '_blank')
  }

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Escolha seu plano ideal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planos pensados para você economizar sem abrir mão da qualidade
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'individual'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Planos Individuais
            </button>
            <button
              onClick={() => setActiveTab('family')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'family'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Planos Família
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans[activeTab as keyof typeof plans].map((plan, index) => (
            <div
              key={plan.name}
              className={`relative card hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500 shadow-2xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/mês</span>
                </div>
                <div className="text-sm text-gray-500 line-through mb-2">
                  De {plan.originalPrice}
                </div>
                <div className="text-lg font-semibold text-blue-600 mb-4">
                  {plan.data}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handlePlanSelect}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'btn-secondary'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o plano ideal? Fale conosco!
          </p>
          <button
            onClick={() => window.open('https://bit.ly/DetalhesCampanhaFederal', '_blank')}
            className="btn-primary"
          >
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  )
}