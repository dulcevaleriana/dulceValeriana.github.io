import React, { FC } from "react"
import Image from 'next/image'

interface HeaderInterface {
    title: string,
    subTitle?: string,
    data: string,
    imageData?: {
        imageLink?: string,
        imageAlt?: string,
        imageWidth?: number,
        imageHeight?: number
    }
}

const Header: FC<HeaderInterface> = ({
    title,
    subTitle,
    data,
    imageData
}) => {
    return <div className="class-Header">
        <div>
            <h1>{title}</h1>
            {subTitle && <h5>{subTitle}</h5>}
            <p>{data}</p>
        </div>
        {imageData && <Image src={imageData.imageLink} alt={imageData.imageAlt} width={imageData.imageWidth} height={imageData.imageHeight} />}
    </div>
}

export default Header;