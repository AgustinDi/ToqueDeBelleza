import '../styles/globals.css';
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";

export const metadata = {
  title: 'Toque de Belleza',
  description: 'Developed by @Agustin_Di',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        <Footer/> 
      </body>
    </html>
  )
}
