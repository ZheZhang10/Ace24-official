import './css/styles.scss'
import { Inter } from 'next/font/google'


import Header from '@/components/ui/header'
import ChatbotWidget from '@/components/chatbot/chatbot-widge'
// import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Home - Ace 24',
  description: 'Ace 24: AI-Humanized Products, Delivered Conversationally',
  icons: 'https://svgshare.com/i/w9Z.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <ChatbotWidget/>
          <Header/>
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
