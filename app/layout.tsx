import {Inter} from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'astro_about_you',
    description: 'Хто володіє інформацією - володіє світом. Відкрийте таємниці свого внутрішнього світу через астрологію. Замовте консультацію на нашому веб-сайті та дізнайтеся більше про себе, свої можливості та шлях до гармонії.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
