import React, { FC, useState, useEffect } from "react"
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

        return <div key={key} className={data.data.howManyColumns === 2 && "class-ColumnTwo"}>
            <h1>{data.data.title}</h1>
            {data.data.dataArray && data.data.dataArray.map((subData, subKey) => <div key={subKey}>
                <div>{subData.name}</div>
                <ul>
                    {subData.data && subData.data.map((data,key) => <li key={key}>{data}</li>)}
                </ul>
            </div>)}
        </div>
    }

    useEffect(() => {
        const interval = setInterval(() => {
          const nextKey = (getKey + 1) % mapsArray.length;
          setGetKey(nextKey);
        }, 5000);

        return () => {
          clearInterval(interval);
        };
    }, [getKey, mapsArray]);

    return <div className="class-ExperienceMap">
        <h1>{title}</h1>
        <p>{data}</p>
        {mapsArray && <SubComponentOrganigram key={getKey} data={mapsArray[getKey]}/>}
        <div>
        {mapsArray && mapsArray.map((data,key) => <div key={key} onClick={()=>setGetKey(key)} style={{ opacity: key === getKey && "1" }}>{isMiniDesktop ? key : data.title}</div>)}
        </div>
    </div>
}

export default ExperienceMap;