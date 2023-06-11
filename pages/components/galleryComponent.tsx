import React, { FC, useState, useEffect, useRef } from "react"
import Image from 'next/image'
import useMediaQuery from "../hooks/useMediaQuery"

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
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const galleryRef = useRef<HTMLDivElement>(null);
    const isMiniDesktop = useMediaQuery("(max-width: 992px)");
    const isSmartphone = useMediaQuery("(max-width: 600px)");

    useEffect(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: isSmartphone ? currentImageIndex * (window.innerWidth / 1.65) : isMiniDesktop ? currentImageIndex * (window.innerWidth / 3) : currentImageIndex * 330,
        //   left: currentImageIndex * galleryRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, [currentImageIndex,isMiniDesktop,isSmartphone]);

    return <div className="class-GalleryComponent">
        <h1>{title}</h1>
        <p>{data}</p>
        <div ref={galleryRef} className={classOnlyShowImage}>
            {imageArray?.map((img,key) => (
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
        {!isMiniDesktop ? !classOnlyShowImage && <div>
            {imageArray?.map((img,key) => (
                <span
                    key={key}
                    onClick={() => setCurrentImageIndex(key)}
                    className={key === currentImageIndex && "class-spanSelected"}
                    style={{
                        width: key > 11 && key !== imageArray.length - 1 && 10,
                        height: key > 11 && key !== imageArray.length - 1 && 10
                    }}
                />
            ))}
        </div> : <div/>}
    </div>
}

export default GalleryComponent;