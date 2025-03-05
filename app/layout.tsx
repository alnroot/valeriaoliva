import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Toque Curativo VOS',
  description: 'Servicio de masajes podologia y reflexologia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
