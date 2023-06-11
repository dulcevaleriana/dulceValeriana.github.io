import React, { FC } from "react"
import Image from 'next/image'
import Button from "./button"

interface NextStepInterface {
    title: string,
    data: string,
    linkButtons?:{
        icon?:any,
        link:string,
        name:string
    }[]
}

const NextStep: FC<NextStepInterface> = ({
    title,
    data,
    linkButtons
}) => {
    return <div className="class-NextStep">
        <h1>{title}</h1>
        <p>{data}</p>
        <div>
            {linkButtons && linkButtons.map((btn,key) => <Button
                key={key}
                name={btn.name}
                link={btn.link}
                icon={btn.icon}
            />)}
        </div>
    </div>
}

export default NextStep