import { Navbar } from "@/components/navbar"
import { Language, getPhrase } from "@/lib/translations"

export default function About({ params }: { params: { lang: Language } }) {
    return (
        <div>
            <Navbar />
            <h1 className="pt-48 text-center text-6xl">About</h1>
        </div>
    )
}
