import { CarrouselSection } from './_components/CarrouselSection'
import { Header } from './_components/Header'
import { ModulesSection } from './_components/ModulesSection'
import { NotebookSection } from './_components/NotebookSection'
const Home = () => {
	return (
		<>
			<Header />
			<NotebookSection />
			<CarrouselSection />
			<ModulesSection />
		</>
	)
}

export default Home
