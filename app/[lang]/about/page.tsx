import { Language, getPhrase } from "@/lib/translations"

export default function About({ params }: { params: { lang: Language } }) {
    return <h1 className="page-header">{getPhrase("ABOUT", params.lang)}</h1>
}
