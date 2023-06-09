import '../styles/initialize.css';
import '../styles/globals.css';
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
