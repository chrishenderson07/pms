import { NavMenu } from './Nav'

export function Header() {
	return (
		<header
			className="w-full h-[500px] py-4"
			style={{
				backgroundImage:
					'radial-gradient(at center, rgba(6,24,38,1) 0%, rgba(2,11,17,1) 75%)',
			}}>
			<div className="mx-auto max-w-[1260px] ">
				<NavMenu />
				<h1 className="text-6xl font-bold text-center mt-12">
					Seu Processo em suas Mãos
				</h1>
			</div>
		</header>
	)
}
