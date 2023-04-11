import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})


export default function App({ Component, pageProps }: AppProps) {
  return( 
  <main className={`${raleway.variable} font-sans`}>
    <Component {...pageProps} />
  </main>)
}
