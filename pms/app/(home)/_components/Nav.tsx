'use client'

import Image from 'next/image'
import Link from 'next/link'

export function NavMenu() {
	const logoImage = require('../../../public/logotipo.png')
	return (
		<nav className="flex items-center justify-between">
			<Link href="/">
				<Image
					src={logoImage}
					width={120}
					height={120}
					alt="Logotipo PMS"
				/>
			</Link>
			<ul className="flex gap-8">
				<Link href="#sobre">Sobre</Link>
				<Link href="#bme">BME</Link>
				<Link href="#planejamento">Planejamento</Link>
				<Link href="#mais">Mais</Link>
			</ul>
		</nav>
	)
}
