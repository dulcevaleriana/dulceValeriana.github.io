import React, { FC } from "react"
import Image from 'next/image'

interface ImplementInterface {
    title: string,
    data: string,
    video?: any
}

const Implement: FC<ImplementInterface> = ({
    title,
    data,
    video
}) => {
    return <div>
        <h1>{title}</h1>
        <p>{data}</p>
        <Image src={video} alt="Vercel Logo" width={726} height={408} />
        {/* *add a gif or video in a future */}
    </div>
}

export default Implement;