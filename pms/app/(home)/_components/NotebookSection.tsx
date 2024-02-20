import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/app/_components/ui/card'
import { GhostButton } from './GhostButton'
import Image from 'next/image'

export const NotebookSection = () => {
	const tabletImage = require('../../../public/maintablet.png')

	return (
		<section className="w-full h-[400px] bg-gradient-to-t from-[#061826] to-[#020B12]">
			<div className="mx-auto w-[1260px] h-[300px] bg-notebook-section bg-cover rounded-[42px]">
				<div className="bg-[#E7E7E7] w-full h-full rounded-[42px] bg-opacity-60">
					<div className="titleBox flex flex-col items-center gap-4">
						<Image src={tabletImage} />

						<h2 className="text-5xl text-[#272727] font-bold">
							PMS (Process Management System)
						</h2>

						<div className="cardContainer flex justify-center gap-4 p-5">
							<Card className="bg-gradient-to-tr from-[#232528] to-[#3C4047]  w-1/4 pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Único</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										O PMS foi desenvolvido para ser uma ferramenta única no
										setor Sucroenergético
									</CardDescription>
								</CardContent>
							</Card>
							<Card className="bg-gradient-to-tr from-[#232528] to-[#3C4047]  w-1/4 pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Facilidade</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Simula seu Balanço de Massa e Energia de forma simples,
										intuitiva e customizada para cada planta
									</CardDescription>
								</CardContent>
							</Card>
							<Card className="bg-gradient-to-tr from-[#232528] to-[#3C4047]  w-1/4 pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Planejamento</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Utilize o BME para planejamento de curto, médio e longo
										prazo aderente à capacidade da planta
									</CardDescription>
								</CardContent>
							</Card>
							<Card className="bg-gradient-to-tr from-[#232528] to-[#3C4047]  w-1/4 pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Análises</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Faça análises de cenários, correlação e receita de maneira
										rápida e confiável, sem exigir anos de experiência.
									</CardDescription>
								</CardContent>
							</Card>
						</div>

						<GhostButton className="mt-5" />
					</div>
				</div>
			</div>
		</section>
	)
}
