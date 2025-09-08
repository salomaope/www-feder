import { Shield, Zap, Users, Headphones, Smartphone, TrendingDown } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Economia Real',
      description: 'Reduza sua conta em até 60% comparado às operadoras tradicionais'
    },
    {
      icon: Zap,
      title: 'Internet Ultra Rápida',
      description: 'Conexão 4G/5G de alta velocidade para todas as suas necessidades'
    },
    {
      icon: Smartphone,
      title: 'Apps Ilimitados',
      description: 'WhatsApp, Instagram, Facebook e muito mais sem consumir sua franquia'
    },
    {
      icon: Shield,
      title: 'Sem Pegadinhas',
      description: 'Transparência total, sem taxas ocultas ou surpresas na conta'
    },
    {
      icon: Users,
      title: 'Portabilidade Gratuita',
      description: 'Mantenha seu número atual sem custos adicionais'
    },
    {
      icon: Headphones,
      title: 'Suporte 24h',
      description: 'Atendimento especializado disponível todos os dias, a qualquer hora'
    }
  ]

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a Federal Associados?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos muito mais que internet móvel. Oferecemos uma experiência completa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card text-center hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Mais de 50.000 clientes satisfeitos
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a milhares de pessoas que já economizam com nossos planos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfação dos clientes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">24h</div>
                <div className="text-gray-600">Suporte disponível</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-gray-600">Economia média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}