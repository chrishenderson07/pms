import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/app/_components/ui/card'
import { GhostButton } from './GhostButton'

export const ModulesSection = () => {
	return (
		<section className="w-full py-12 bg-[#061826] bg-cover">
			<h2 className="sm:text-5xl md:text-4xl text-3xl text-white font-bold text-center">
				PMS - Módulo BME
			</h2>
			<div className="flex flex-col justify-center items-center">
				<div className="cardContainer md:w-6/7  flex flex-col gap-3 sm:flex sm:flex-row sm:justify-center sm:gap-3 sm:px-14 px-6 mt-8">
					<Card className="bg-transparent md:w-1/4 pt-7 pb-2 px-0 text-center border-0">
						<CardTitle className="mb-3 text-2xl">Customizado</CardTitle>
						<CardContent className="text-sm">
							<CardDescription className="text-white">
								De forma 100% customizada para cada planta,o BME oferece apenas
								opções  e inputs existentes na planta
							</CardDescription>
						</CardContent>
					</Card>
					<Card className="bg-transparent md:w-1/4 pt-7 pb-2 px-0 text-center border-0">
						<CardTitle className="mb-3 text-2xl">Prático</CardTitle>
						<CardContent className="text-sm">
							<CardDescription className="text-white">
								Com o PMS, entender o processo e como ele se comporta se torna
								uma tarefa fácil
							</CardDescription>
						</CardContent>
					</Card>
					<Card className="bg-transparent md:w-1/4 pt-7 pb-2 px-0 text-center border-0">
						<CardTitle className="mb-3 text-2xl">Organizado</CardTitle>
						<CardContent className="text-sm">
							<CardDescription className="text-white">
								Estruturado de forma organizada e intuitiva, permite visualizar
								o fluxograma de cada área, com abas para entradas de dados para
								fluxos e equipamentos
							</CardDescription>
						</CardContent>
					</Card>
				</div>

				<GhostButton />
			</div>
		</section>
	)
}
