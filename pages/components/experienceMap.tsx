import React, { FC, useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"

interface ExperienceMapInterface {
    title: string,
    data: string,
    mapsArray: {
        title: string,
        howManyColumns?: 1 | 2 | 3 | 4 | null
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
    const [getKey , setGetKey] = useState(0);
    const isMiniDesktop = useMediaQuery("(max-width: 600px)");

    const SubComponentOrganigram = (data:any,key:number) => {
        console.log({data, condition: data.data.howManyColumns === 2})
        return <div key={key} className={data.data.howManyColumns === 2 && "class-ColumnTwo"}>
            <h1>{data.data.title}</h1>
            {data.data.dataArray?.map((subData, subKey) => <div key={subKey}>
                <div>{subData.name}</div>
                <ul>
                    {subData?.data?.map((data,key) => <li key={key}>{data}</li>)}
                </ul>
            </div>)}
        </div>
    }

    return <div className="class-ExperienceMap">
        <h1>{title}</h1>
        <p>{data}</p>
        <SubComponentOrganigram key={getKey} data={mapsArray[getKey]}/>
        <div>
        {mapsArray.map((data,key) => <div key={key} onClick={()=>setGetKey(key)} style={{ opacity: key === getKey && "1" }}>{isMiniDesktop ? key : data.title}</div>)}
        </div>
    </div>
}

export default ExperienceMap;