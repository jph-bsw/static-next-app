"use client"

import { languages } from "@/lib/translations"

let language = (
    navigator.language ||
    // @ts-expect-error
    navigator.userLanguage ||
    "en"
).split("-")[0]

const gotoLanguage = languages.find((lang) => lang === language) || "en"

export default function LanguageSwitch() {
    return (
        <div className="flex space-x-4">
            <div>
                You seem to be <strong>{language}</strong>, you should go to{" "}
                <strong>{gotoLanguage}</strong>
            </div>

            <a href={`${gotoLanguage}`} className="font-bold underline">
                So you should go here
            </a>

            <a href="en" className="underline">
                English
            </a>
            <a href="de" className="underline">
                Deutsch
            </a>
            <a href="fr" className="underline">
                Français
            </a>
        </div>
    )
}
