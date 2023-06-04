import React from "react"
import Image from 'next/image'
import Button from "./button"
import Link from 'next/link'

export default function Menu() {
    return <nav className="class-menuComponent">
        <ul>
            <li>
                <Image src="/image/logo.svg" alt="Vercel Logo" width={72.13} height={50} />
            </li>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/dulcevaleriana/">Meet me</Link>
            </li>
            <li>
                <Button name="Lest talk" link="mailto:dulceguzmantaveras@gmail.com"/>
            </li>
        </ul>
    </nav>
}