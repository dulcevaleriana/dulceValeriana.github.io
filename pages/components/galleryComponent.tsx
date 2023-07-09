import React, { FC, useState, useEffect, useRef } from "react"
import Image from 'next/image'
import useMediaQuery from "../hooks/useMediaQuery"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
// import required modules
import { Navigation } from 'swiper/modules';

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
          behavior: "smooth",
        });
      }
    }, [currentImageIndex,isMiniDesktop,isSmartphone]);

    useEffect(() => {
        const interval = setInterval(() => {
          const nextKey = (currentImageIndex + 1) % imageArray.length;
          setCurrentImageIndex(nextKey);
        }, 5000);

        return () => {
          clearInterval(interval);
        };
    }, [currentImageIndex, imageArray]);

    return <div className="class-GalleryComponent">
        <div>
            <h1>{title}</h1>
            <p>{data}</p>
        </div>
        {isMiniDesktop ? <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className={`mySwiper ${classOnlyShowImage}`}
                >
                    {imageArray?.map((img,key) => (
                        <SwiperSlide>
                            <Image
                                onClick={() => setCurrentImageIndex(key)}
                                key={key}
                                src={img.imageLink}
                                alt={img.imageAlt}
                                width={img.imageWidth}
                                height={img.imageHeight}
                                className={key === currentImageIndex && "class-imgSelected"}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper> : <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className={`mySwiper ${classOnlyShowImage}`}
            >
                {imageArray?.map((img,key) => (
                    <SwiperSlide>
                        <Image
                            onClick={() => setCurrentImageIndex(key)}
                            key={key}
                            src={img.imageLink}
                            alt={img.imageAlt}
                            width={img.imageWidth}
                            height={img.imageHeight}
                            className={key === currentImageIndex && "class-imgSelected"}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>}
    </div>
}

export default GalleryComponent;