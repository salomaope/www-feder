'use client'

import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
  title: 'Federal Associados - Você conectado',
  description: 'Reduza sua conta de internet móvel em até 60% com nossos planos exclusivos. Obtenha até 300GB de internet, e com apps que não consomem sua franquia.',
  keywords: 'internet móvel, planos de celular, economia, Federal Associados',
  authors: [{ name: 'Federal Associados' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'https://federalassociadoscadastro.com/wp-content/uploads/2024/01/Logo-com-fundo-transparente.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased" suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}