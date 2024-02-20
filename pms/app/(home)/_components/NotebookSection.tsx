import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/app/_components/ui/card'
import Image from 'next/image'

import WhatsappIcon from './WhatsappIcon'

import { Button } from '@/app/_components/ui/button'

import tabletImage from '../../../public/maintablet.png'
import Link from 'next/link'
export const NotebookSection = () => {
	const whatsappLink =
		'https://api.whatsapp.com/send?phone=5517991850473&text=Ol%C3%A1.%20Obrigado%20por%20entrar%20em%20contato.%20Aguarde%20que%20retornaremos%20assim%C2%A0que%C2%A0poss%C3%ADvel.'

	return (
		<section className="w-full bg-gradient-to-t from-[#061826] to-[#020B12]">
			<div className="mx-auto  w-full w-max-[1260px] bg-notebook-section bg-cover rounded-[42px]">
				<div className="bg-[#E7E7E7] w-full h-full rounded-[42px] bg-opacity-60 sm:pb-4 py-12">
					<div className="titleBox flex flex-col items-center gap-4">
						<Image
							src={tabletImage}
							alt="Table com sistema PMS"
							className="sm:-mt-[300px] -mt-[200px] sm:w-2/3 w-full -ml-4 sm:ml-0"
						/>

						<h2 className="sm:text-5xl md:text-4xl text-3xl text-[#272727] font-bold text-center">
							PMS (Process Management System)
						</h2>

						<div className="cardContainer md:w-10/12 flex flex-col gap-3 sm:flex sm:flex-row sm:justify-center sm:gap-3 sm:px-14 px-6 mt-8">
							<Card className="bg-gradient-to-tr from-[#232528] to-[#3C4047]  md:w-1/4 pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Único</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										O PMS foi desenvolvido para ser uma ferramenta única no
										setor Sucroenergético
									</CardDescription>
								</CardContent>
							</Card>
							<Card className="bg-gradient-to-tr from-[#232528] to-[#3C4047]  md:w-1/4 pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Facilidade</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Simula seu Balanço de Massa e Energia de forma simples,
										intuitiva e customizada para cada planta
									</CardDescription>
								</CardContent>
							</Card>
							<Card className="bg-gradient-to-tr from-[#232528] to-[#3C4047]  md:w-1/4 pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Planejamento</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Utilize o BME para planejamento de curto, médio e longo
										prazo aderente à capacidade da planta
									</CardDescription>
								</CardContent>
							</Card>
							<Card className="bg-gradient-to-tr from-[#232528] to-[#3C4047]  md:w-1/4 pt-7 pb-2 px-0 text-center shadow-sm ">
								<CardTitle className="mb-3 text-2xl">Análises</CardTitle>
								<CardContent className="text-sm">
									<CardDescription className="text-white">
										Faça análises de cenários, correlação e receita de maneira
										rápida e confiável, sem exigir anos de experiência.
									</CardDescription>
								</CardContent>
							</Card>
						</div>

						<Link
							href={whatsappLink}
							passHref>
							<Button className="mt-4 sm:mt-8 bg-[#282A2E] text-white flex gap-4 text-xl font-bold rounded-3xl py-8 px-10 shadow-lg transition-transform hover:bg-[#282A2E] hover:-translate-y-4">
								<WhatsappIcon />
								<h3>Entre em contato</h3>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
