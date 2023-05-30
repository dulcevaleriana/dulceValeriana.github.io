import React, { FC, useState } from "react"
import Image from 'next/image'

interface CheckUserInterface {
    title: string,
    data: string,
    questions: {
        question:string,
        answer:{
            yes:number,
            maybe:number,
            not:number
        }
    }[]
}

const CheckUser: FC<CheckUserInterface> = ({
    title,
    data,
    questions
}) => {
    const [answer, setAnswer] = useState({
        yes:questions[0].answer.yes,
        maybe:questions[0].answer.maybe,
        not:questions[0].answer.not
    })

    return <div>
        <div>
            <div>
                <Image src="/image/yes.png" alt="yes icon" width={145} height={145} />
                <span>
                    <p>SI</p>
                    <p>{answer.yes}</p>
                </span>
            </div>
            <div>
                <Image src="/image/no.png" alt="no icon" width={145} height={145} />
                <span>
                    <p>NO</p>
                    <p>{answer.not}</p>
                </span>
            </div>
            <div>
                <Image src="/image/maybe.png" alt="maybe icon" width={145} height={145} />
                <span>
                    <p>TAL VEZ</p>
                    <p>{answer.maybe}</p>
                </span>
            </div>
        </div>
        <div>
            <h1>{title}</h1>
            <p>{data}</p>
            <div>
                {questions.map((data,key) => <div key={key} onClick={()=>setAnswer(data.answer)}>{data.question}</div>)}
            </div>
        </div>
    </div>
}

export default CheckUser;