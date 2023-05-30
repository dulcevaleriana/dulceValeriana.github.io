import React, { FC } from "react"
import Image from 'next/image'

interface DbaModelInterface {
    title: string,
    imageData: {
        src: string,
        alt: string,
        width: number,
        height: number
    }
}

const DbaModel: FC<DbaModelInterface> = ({
    title,
    imageData
}) => {
    return <div>
        <h1>{title}</h1>
        <Image src={imageData.src} alt={imageData.alt} width={imageData.width} height={imageData.height} />
    </div>
}

export default DbaModel;