import { Navbar } from "@/components/navbar"
import { Language, getPhrase } from "@/lib/translations"
import dynamic from "next/dynamic"

const LanguageSwitch = dynamic(() => import("@/components/language-switch"), {
    ssr: false
})

export default function HomeLang({ params }: { params: { lang: Language } }) {
    return (
        <>
            <div>
                <Navbar />
                <div className="flex justify-center pt-48">
                    <h1 className="text-4xl">
                        Static site with Next.js, Localization, tailwindcss and
                        shadcn 🎨
                    </h1>
                </div>
            </div>
        </>
    )
}
