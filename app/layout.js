import '../styles/globals.css'
import NavBar from "./Components/NavBar"

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
      </body>
    </html>
  )
}
