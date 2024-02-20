import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'

const sora = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'PMS - Balanço de Massa e Energia',
	description:
		'Descubra como dominar os Balanços de Massa e Energia (BME) em sua indústria com o PMS!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<body className={`${sora.className} dark`}>{children}</body>
		</html>
	)
}
