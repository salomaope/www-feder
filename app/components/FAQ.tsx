'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Como funciona a portabilidade do meu número?',
      answer: 'A portabilidade é totalmente gratuita e simples. Nossa equipe cuida de todo o processo para você. Basta nos fornecer alguns dados e em até 3 dias úteis seu número estará funcionando com nossos planos, sem interrupção do serviço.'
    },
    {
      question: 'Quais apps não consomem minha franquia de dados?',
      answer: 'Dependendo do seu plano, apps como WhatsApp, Instagram, Facebook, Twitter, YouTube, Netflix, Spotify e muitos outros não consomem sua franquia. Consulte os detalhes específicos de cada plano para ver a lista completa.'
    },
    {
      question: 'Posso cancelar meu plano a qualquer momento?',
      answer: 'Sim! Não temos fidelidade obrigatória. Você pode cancelar seu plano a qualquer momento sem multas ou taxas de cancelamento. Acreditamos que você deve ficar conosco porque está satisfeito, não por obrigação.'
    },
    {
      question: 'Como é a cobertura da rede?',
      answer: 'Utilizamos a infraestrutura das principais operadoras do país, garantindo excelente cobertura 4G/5G em todo território nacional. Você terá a mesma qualidade de sinal que está acostumado, mas pagando muito menos.'
    },
    {
      question: 'Quanto tempo leva para ativar meu plano?',
      answer: 'Para novos números, a ativação é imediata após a confirmação do pagamento. Para portabilidade, o processo leva até 3 dias úteis. Durante todo o período, você recebe atualizações sobre o andamento.'
    },
    {
      question: 'Posso mudar de plano depois?',
      answer: 'Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são processadas no próximo ciclo de cobrança, sem taxas adicionais.'
    },
    {
      question: 'Como funciona o suporte ao cliente?',
      answer: 'Oferecemos suporte 24 horas por dia, 7 dias por semana através de WhatsApp, telefone e chat online. Nossa equipe é especializada e está sempre pronta para ajudar com qualquer dúvida ou problema.'
    },
    {
      question: 'Há taxa de adesão ou custos ocultos?',
      answer: 'Não! O preço que você vê é exatamente o que você paga. Não cobramos taxa de adesão, ativação ou qualquer custo oculto. Total transparência em todos os nossos planos.'
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nossos planos e serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openItem === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <button
            onClick={() => window.open('https://bit.ly/contatofederalassociados', '_blank')}
            className="btn-primary"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  )
}