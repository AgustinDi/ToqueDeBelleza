import '../styles/initialize.css';
import '../styles/globals.css';
import Script from 'next/script'
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import { Montserrat } from 'next/font/google';
import { Context } from './Context/Context';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Toque de Belleza',
  description: 'Developed by @Agustin_Di',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es" className={montserrat.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BW7YYFEJZ5"></Script>
        <Script id="google-analytics">
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-BW7YYFEJZ5');
            `
          }
        </Script>  
      </head>
      <body>
        <Context>
        <div style={{height: '100px'}}></div>
        <NavBar/>
        <center>
          {children}
        </center> 
        </Context>
        <Footer/> 
      </body>
    </html>
  )
}
