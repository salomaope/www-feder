import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Federal Associados',
  description: 'Advocacia especializada em direito previdenciário',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}