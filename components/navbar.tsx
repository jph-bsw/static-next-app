import Link from "next/link"
import ModeToggle from "./ui/theme-toggle"

export function Navbar() {
    return (
        <div className="flex h-[5vh] items-center justify-between border-b px-4">
            <span className="font-semibold">Lorem Ipsum</span>
            <div className="flex justify-center gap-4">
                <Link href={"/"}>Home</Link>
                <Link href={"about"}>About</Link>
            </div>
            <ModeToggle />
        </div>
    )
}
