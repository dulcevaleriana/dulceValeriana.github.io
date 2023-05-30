import React, { FC } from "react"
import Image from 'next/image'

interface ExperienceMapInterface {
    title: string,
    data: string,
    mapsArray: {
        title: string,
        dataArray:{
            name: string,
            data?: string[]
        }[]
    }[]
}

const ExperienceMap: FC<ExperienceMapInterface> = ({
        title,
        data,
        mapsArray
    }) => {

    const SubComponentOrganigram = (data:any,key:number) => {
        return <div key={key}>
            <h5>{data.data.title}</h5>
            {data.data.dataArray?.map((subData, subKey) => <div key={subKey}>
                <div>{subData.name}</div>
                {subData.data && <ul>
                    {subData.data.map((data,key) => <li key={key}>{data}</li>)}
                </ul>}
            </div>)}
        </div>
    }

    return <div>
        <h1>{title}</h1>
        <p>{data}</p>
        {mapsArray.map((data,key) => <SubComponentOrganigram key={key} data={data}/>)}
    </div>
}

export default ExperienceMap;