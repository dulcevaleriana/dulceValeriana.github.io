import React, { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';

interface buttonInterface {
    name?: String,
    link?: string,
    icon?: string
}

const Button: FC<buttonInterface> = ({
    name,
    link,
    icon
}) => {
    const ButtonComp = () => <button>{icon && <Image src={icon} alt="icon" width={24} height={24} />}{name}</button>
    return link ? <Link href={link} target="_blank"><ButtonComp/></Link> : <ButtonComp/>
}

export default Button;