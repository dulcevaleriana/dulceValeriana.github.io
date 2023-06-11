import React, { FC } from "react"
import Image from 'next/image'

interface ImageGroupInterface {
    ImageGroupArray: string[]
}

const ImageGroup: FC<ImageGroupInterface> = ({ImageGroupArray}) => {
    return ImageGroupArray ? <div className="class-gallery">
        {ImageGroupArray.map((img,key) => <Image src={img} alt={img} width={246.36} height={138.68} key={key}/>)}
    </div> : null
}

export default ImageGroup;