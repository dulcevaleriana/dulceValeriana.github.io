import React, { FC } from "react"
import Image from 'next/image'

interface GalleryComponentInterface {
    title: string,
    data?: string,
    imageArray:{
        imageLink?: string,
        imageAlt?: string,
        imageWidth?: number,
        imageHeight?: number
    }[]
}

const GalleryComponent: FC<GalleryComponentInterface> = ({
    title,
    data,
    imageArray
}) => {
    return <div>
        <h1>{title}</h1>
        <p>{data}</p>
        <div>
            {imageArray.map((img,key) => <Image key={key} src={img.imageLink} alt={img.imageAlt} width={img.imageWidth} height={img.imageHeight} />)}
        </div>
    </div>
}

export default GalleryComponent;