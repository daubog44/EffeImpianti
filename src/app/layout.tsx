import './globals.css';
import 'react-toastify/dist/ReactToastify.css';;
import fonts from "../utils/fonts";
import Providers from "./Providers";


export const metadata = {
  title: 'EffeImpianti Srl - Impianti termici e di condizionamento, Monza e Brianza',
  description: 'Progettazione, installazione e manutenzione di impianti termici e di condizionamento industriali e civili a Monza e Brianza e in Lombardia',
  keywords: "Industriale, termici, riscaldamento, cogenerazione, solari, condizionamento, ventilazione e aspirazione, aria compressa, idrico-sanitari, refrigerazione, antincendio, risparmio energetico, installazione, Macherio, Monza e Brianza",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={fonts}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
