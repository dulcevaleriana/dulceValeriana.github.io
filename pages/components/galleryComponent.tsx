import React, { FC, useState, useEffect, useRef } from "react"
import Image from 'next/image'

interface GalleryComponentInterface {
    title: string,
    data?: string,
    imageArray:{
        imageLink?: string,
        imageAlt?: string,
        imageWidth?: number,
        imageHeight?: number
    }[],
    classOnlyShowImage?:string
}

const GalleryComponent: FC<GalleryComponentInterface> = ({
    title,
    data,
    imageArray,
    classOnlyShowImage
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: currentImageIndex * 330,
        //   left: currentImageIndex * galleryRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, [currentImageIndex]);

    return <div className="class-GalleryComponent">
        <h1>{title}</h1>
        <p>{data}</p>
        <div ref={galleryRef} className={classOnlyShowImage}>
            {imageArray.map((img,key) => (
                <Image
                    onClick={() => setCurrentImageIndex(key)}
                    key={key}
                    src={img.imageLink}
                    alt={img.imageAlt}
                    width={686}
                    height={429}
                    className={key === currentImageIndex && "class-imgSelected"}
                />
            ))}
        </div>
        {!classOnlyShowImage && <div>
            {imageArray.map((img,key) => (
                <span
                    onClick={() => setCurrentImageIndex(key)}
                    className={key === currentImageIndex && "class-spanSelected"}
                    style={{
                        width: key > 11 && key !== imageArray.length - 1 && 10,
                        height: key > 11 && key !== imageArray.length - 1 && 10
                    }}
                />
            ))}
        </div>}
    </div>
}

export default GalleryComponent;