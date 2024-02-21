import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from '@/app/_components/ui/card'
import Image from 'next/image'

import demandaIcon from '../../../public/icon/demanda.svg'

export const GhostCard = () => {
	return (
		<Card className="z-10 absolute -mt-40  bg-[rgba(16,20,24,0.57)] backdrop-blur-sm  rounded-3xl border-solid border-[#393939] border-[1px]">
			<CardHeader>
				<Image
					src={demandaIcon}
					alt="Icone de demanda"
					width={100}
					height={100}
					className="border-solid border-[#393939] border-[1px] rounded-2xl p-3"
				/>
			</CardHeader>
			<CardContent>
				<CardDescription className="text-white text-base font-bold">
					No seu processo existem várias opções para operar?
				</CardDescription>
			</CardContent>
		</Card>
	)
}
