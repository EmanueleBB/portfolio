
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import Stack from './components/stack/Stack'
import FirstText from './components/firstText/FirstText'
import MainContainer from './components/mainContainer/MainContainer'
import CardSection from './components/cardsSection/CardSection'
import CodeSection from './components/codeSection/CodeSection'
import ContactsSection from './components/contactSection/ContactsSection'
import Footer from './components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Emanuele | Web Developer',
	description: 'I am a full stack web and mobile developer that tries to design pretty things',
	name:"viewport",
	content:"width=device-width, initial-scale=1.0",
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/logos/logoOnlyERounded.png" sizes="any" />
				<link
					rel="apple-touch-icon"
					href="/logos/logoOnlyERounded.png"
					type="image/<generated>"
					sizes="<generated>"
					/>	
			</head>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
