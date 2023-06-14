import React, { useState } from "react"
import Image from 'next/image'
import Button from "./button"
import Link from 'next/link'
import useMediaQuery from "../hooks/useMediaQuery"

export default function Menu() {
    const [openMenu, setOpenMenu] = useState(false)
    const isTabletOrLess = useMediaQuery("(max-width: 992px)")

    return <nav className="class-menuComponent">
        {isTabletOrLess ? <>
            <Image onClick={()=>setOpenMenu(!openMenu)} src="/image/icon/menu.svg" alt="menu" width={72.13} height={50}/>
            <div>
                <h2>Dulce Valeriana</h2>
                <h5>Diseñadora con un fuerte enfoque en <span>Accesiibilidad Web</span></h5>
            </div>
            { openMenu && <ul>
                <li>
                    <Link href="/">Trabajos</Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/dulcevaleriana/" target="_blank">Conoceme</Link>
                </li>
                <li>
                    <Button name="Hablemos" link="mailto:dulceguzmantaveras@gmail.com"/>
                </li>
            </ul>}
        </> : <ul>
            <li>
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
        </ul>}
    </nav>
}