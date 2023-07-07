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
    let valueOption = isSmartphone ? 2 : isMiniDesktop ? 5 : 11;
    let valueViewOption = isSmartphone ? 7 : isMiniDesktop ? 15 : 30;

    useEffect(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollTo({
          left: isSmartphone ? currentImageIndex * (window.innerWidth / 1.65) : isMiniDesktop ? currentImageIndex * (window.innerWidth / 3) : currentImageIndex * 330,
          behavior: "smooth",
        });
      }
    }, [currentImageIndex,isMiniDesktop,isSmartphone]);

    useEffect(() => {
        const interval = setInterval(() => {
          const nextKey = (currentImageIndex + 1) % imageArray.length;
          setCurrentImageIndex(nextKey);
        }, 3000);

        return () => {
          clearInterval(interval);
        };
    }, [currentImageIndex, imageArray]);

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
                    width={img.imageWidth}
                    height={img.imageHeight}
                    className={key === currentImageIndex && "class-imgSelected"}
                />
            ))}
        </div>
        {!classOnlyShowImage && <div>
            <svg onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? currentImageIndex : currentImageIndex - 1)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="9 6 15 12 9 18" transform="matrix(-1 0 0 1 24 0)"></polyline></svg>
            {imageArray?.map((img,key) => (
                <span
                    key={key}
                    onClick={() => setCurrentImageIndex(key)}
                    className={key === currentImageIndex && "class-spanSelected"}
                    style={{
                        width: key > valueOption && key !== imageArray.length - 1 && 10,
                        height: key > valueOption && key !== imageArray.length - 1 && 10,
                        display: key > valueViewOption && key !== imageArray.length - 1 && "none"
                    }}
                />
            ))}
            <svg onClick={() => setCurrentImageIndex(currentImageIndex === imageArray.length - 1 ? currentImageIndex : currentImageIndex + 1)} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="9 6 15 12 9 18"></polyline></svg>
        </div>}
    </div>
}

export default GalleryComponent;