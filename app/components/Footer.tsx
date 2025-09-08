import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://federalassociadoscadastro.com/wp-content/uploads/2024/01/Logo-com-fundo-transparente.png" 
                alt="Federal Associados" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold">Federal Associados</h3>
                <p className="text-white/80">Você conectado</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-md">
              Conectamos você ao que importa, oferecendo os melhores planos de internet móvel 
              com economia real e qualidade garantida.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:21999293221" 
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@federalassociados.com" 
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Planos</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#planos" className="hover:text-white transition-colors">Planos Individuais</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos Família</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos Empresariais</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portabilidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Suporte</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Phone className="w-5 h-5" />
              <a 
                href="tel:21999293221" 
                className="text-xl font-semibold hover:text-yellow-300 transition-colors"
              >
                (21) 99929-3221
              </a>
            </div>
            <p className="text-white/60 text-sm">
              © 2024 Federal Associados. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}