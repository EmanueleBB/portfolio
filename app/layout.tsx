
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import Stack from './components/stack/Stack'
import FirstText from './components/firstText/FirstText'
import MainContainer from './components/mainContainer/MainContainer'
import CardSection from './components/cardsSection/CardSection'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Emanuele | Web Developer',
	description: 'I am a full stack web and mobile developer who loves to explore with design and functionalities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Stack/>
				<Navbar/>
				<MainContainer>
					<HeroSection/>
					<FirstText/>
					<CardSection/>
				</MainContainer>
				{children}
			</body>

		</html>
	)
}
