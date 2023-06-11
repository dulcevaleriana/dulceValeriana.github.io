import React from "react"
import Image from 'next/image'
import Button from "./button"
import Link from 'next/link'

export default function Menu() {
    return <nav className="class-menuComponent">
        <ul>
            <li>
                {/* <Image src="/image/logo.svg" alt="Vercel Logo" width={72.13} height={50} /> */}
                <h2>Dulce Valeriana</h2>
                <h5>Diseñadora con un fuerte enfoque en <span>Accesiibilidad Web</span></h5>
            </li>
            <li>
                <Link href="/">Trabajos</Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/in/dulcevaleriana/" target="_blank">Conoceme</Link>
            </li>
            <li>
                <Button name="Hablemos" link="mailto:dulceguzmantaveras@gmail.com"/>
            </li>
        </ul>
    </nav>
}