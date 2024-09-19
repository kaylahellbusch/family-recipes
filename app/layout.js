import localFont from 'next/font/local'
import './globals.scss'
import Header from '../Components/Header'
import ClientComponent from '../Components/ClientComponent'
import Footer from '../Components/Footer'

const poppinsReg = localFont({
  src: './fonts/Poppins-Regular.ttf',
  variable: '--font-reg',
  weight: '100 900'
})
const poppinsBold = localFont({
  src: './fonts/Poppins-Bold.ttf',
  variable: '--font-bold',
  weight: '100 900'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppinsReg.variable} ${poppinsBold.variable}`}>
        <Header />
        <ClientComponent>{children}</ClientComponent>
        <Footer />
      </body>
    </html>
  )
}
