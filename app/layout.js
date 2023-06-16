import '../styles/initialize.css';
import '../styles/globals.css';
import NavBar from "./Components/NavBar.jsx";
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
