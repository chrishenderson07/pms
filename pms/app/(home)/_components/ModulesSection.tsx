import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/app/_components/ui/card'
import { GhostButton } from './GhostButton'
import Image from 'next/image'

import tabletImage2 from '../../../public/tablet2.webp'
import { GhostCard } from './GhostCard'

export const ModulesSection = () => {
	return (
		<section className="w-full py-12 bg-[#061826] bg-cover">
			<h2 className="sm:text-5xl md:text-4xl text-3xl text-white font-bold text-center">
				PMS - Módulo BME
			</h2>
			<div className="flex flex-col justify-center items-center pb-24">
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

			{/* Seção com Notebook e cards flutuantes */}
			<div className="notebook-container flex flex-col sm:flex-row items-center w-11/12 md:w-10/12 mx-auto mt-52 sm:pl-10 py-6 bg-[#020B12] rounded-[42px] shadow-extraLarge h-[400px]">
				<div className="sm:w-2/5">
					<h2 className="text-center sm:text-left text-white text-4xl font-bold">
						Rodar BME nunca
						<br />
						foi tão fácil
					</h2>
				</div>

				<div className="sm:w-3/5 mt-8 sm:mt-0 relative">
					<Image
						src={tabletImage2}
						alt="Tablet com o sistema PMS"
					/>
					<GhostCard />
				</div>
			</div>
		</section>
	)
}
