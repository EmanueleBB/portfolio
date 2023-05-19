
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import Stack from './components/stack/Stack'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Emanuele, web developer',
	description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar/>
				<HeroSection/>
				<Stack/>
				{children}
			</body>

		</html>
	)
}
