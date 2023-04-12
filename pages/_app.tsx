import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway, Playfair_Display } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})


export default function App({ Component, pageProps }: AppProps) {
  return( 
  <main className={`${raleway.variable} font-sans`}>
    <Component {...pageProps} />
  </main>)
}
