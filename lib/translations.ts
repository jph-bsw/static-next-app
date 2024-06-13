export type Language = "en" | "de" | "fr"
export const languages: Language[] = ["en", "de", "fr"]

const phrases: { [key: string]: string[] } = {
    HELLO_WORLD: ["Hello, World!", "Hallo, Welt!", "Bonjour, le monde!"],
    ABOUT: ["About", "Über", "Sur"]
}

export function getPhrase(key: string, lang: Language): string {
    const langKey =
        lang === "en" ? 0 : lang === "de" ? 1 : lang === "fr" ? 2 : 0

    return phrases[key]?.[langKey] || key
}
