import CardSection from "./components/cardsSection/CardSection";
import CodeSection from "./components/codeSection/CodeSection";

import FirstText from "./components/firstText/FirstText";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import LinksSection from "./components/notesSection/NotesSection";
import MainContainer from "./components/mainContainer/MainContainer";
import MyProjects from "./components/myProjectsSection/MyProjects";
import Navbar from "./components/navbar/Navbar";
import Stack from "./components/stack/Stack";
import ContactsSection from "./components/contactSection/ContactsSection";

export default function Home(){
	return (
		<>
			<Stack/>
			<Navbar/>
			<MainContainer>
				<HeroSection/>
				<FirstText/>
				<CardSection/>
				<CodeSection/>
				<MyProjects/>
				<LinksSection/> 
				<ContactsSection/>
				<Footer/>
			</MainContainer>
		</>
	)
}
