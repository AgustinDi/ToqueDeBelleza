import '../styles/initialize.css';
import '../styles/globals.css';
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Searcher from './Components/Searcher';
import { Montserrat } from 'next/font/google';

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
        <NavBar/>
        <center>
          {children}
        </center> 
        <Footer/> 
      </body>
    </html>
  )
}
