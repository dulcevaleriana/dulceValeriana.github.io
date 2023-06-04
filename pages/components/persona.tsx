import React, { FC } from "react"
import Image from 'next/image'

interface PersonaInterface {
    title:string,
    data:string,
    person:{
        photoLink:string,
        data:string
    }[]
}

const Persona: FC<PersonaInterface> = ({
    title,
    data,
    person
}) => {
    return <div className="class-persona">
        <h1>{title}</h1>
        <p>{data}</p>
        {person.map((data,key)=><div key={key}>
            <Image src={data.photoLink} alt={data.photoLink} width={145} height={145} />
            <p>{data.data}</p>
        </div>)}
    </div>
}

export default Persona;