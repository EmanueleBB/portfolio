import CardSection from "./components/cardsSection/CardSection";
import CodeSection from "./components/codeSection/CodeSection";
import ContactsSection from "./components/ContactsSection/ContactsSection";
import FirstText from "./components/firstText/FirstText";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import MainContainer from "./components/mainContainer/MainContainer";
import Navbar from "./components/navbar/Navbar";
import Stack from "./components/stack/Stack";

export default function Home(){
	return (
		<>
		
		<Stack/>
		<Navbar/>
		<MainContainer>
			<HeroSection/>
			<FirstText/>
			<CardSection/>
		</MainContainer>
		<CodeSection/>
		<ContactsSection/>
		<Footer/>
		</>
	)
}
