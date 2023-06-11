import React, { FC, useState } from "react"
import Image from 'next/image'
import useMediaQuery from "../hooks/useMediaQuery"

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
    const [getKey, setGetKey] = useState(0);
    const initialAnswer = questions?.[0]?.answer || {
        yes: 0,
        maybe: 0,
        not: 0
    };
    const [answer, setAnswer] = useState(initialAnswer);
    const isMiniDesktop = useMediaQuery("(max-width: 1024px)")

    const selectQuestion = (answer,key) => {
        setGetKey(key)
        setAnswer(answer)
    }

    return <div className="class-checkUser">
        <div>
            <div style={{
                height:
                    answer.yes <= 3 ? '50%' :
                    answer.yes === 4 ? '55%' :
                    answer.yes === 5 ? '60%' :
                    answer.yes === 6 ? '65%' :
                    answer.yes === 7 ? '70%' :
                    answer.yes === 8 ? '75%' :
                    answer.yes === 9 ? '80%' :
                    answer.yes === 10 ? '85%' :
                    answer.yes === 11 ? '90%' :
                    answer.yes === 12 ? '95%' :
                    answer.yes === 13 ? '100%' : '0'
            }}>
                <Image src="/image/yes.svg" alt="yes icon" width={145} height={145} />
                <span>
                    <p>SI</p>
                    <p>{answer.yes}</p>
                </span>
            </div>
            <div style={{
                height:
                    answer.not <= 3 ? '50%' :
                    answer.not === 4 ? '55%' :
                    answer.not === 5 ? '60%' :
                    answer.not === 6 ? '65%' :
                    answer.not === 7 ? '70%' :
                    answer.not === 8 ? '75%' :
                    answer.not === 9 ? '80%' :
                    answer.not === 10 ? '85%' :
                    answer.not === 11 ? '90%' :
                    answer.not === 12 ? '95%' :
                    answer.not === 13 ? '100%' : '0'
            }}>
                <Image src="/image/no.svg" alt="no icon" width={145} height={145} />
                <span>
                    <p>NO</p>
                    <p>{answer.not}</p>
                </span>
            </div>
            <div style={{
                height:
                    answer.maybe <= 3 ? '50%' :
                    answer.maybe === 4 ? '55%' :
                    answer.maybe === 5 ? '60%' :
                    answer.maybe === 6 ? '65%' :
                    answer.maybe === 7 ? '70%' :
                    answer.maybe === 8 ? '75%' :
                    answer.maybe === 9 ? '80%' :
                    answer.maybe === 10 ? '85%' :
                    answer.maybe === 11 ? '90%' :
                    answer.maybe === 12 ? '95%' :
                    answer.maybe === 13 ? '100%' : '0'
            }}>
                <Image src="/image/maybe.svg" alt="maybe icon" width={145} height={145} />
                <span>
                    <p>TAL VEZ</p>
                    <p>{answer.maybe}</p>
                </span>
            </div>
            {isMiniDesktop && <div>
                {questions && questions.map((data,key) => <div key={key} onClick={() => selectQuestion(data.answer,key)} style={{opacity: getKey === key && '1'}}>{key}</div>)}
            </div>}
        </div>
        <div>
            <h1>{title}</h1>
            <p>{data}</p>
            {isMiniDesktop && <div>
                {questions && questions.filter((check, key) => getKey === key).map((data,key) => <div key={key} style={{opacity: '1'}}>{data.question}</div>)}
            </div>}
            {!isMiniDesktop && <div>
                {questions && questions.map((data,key) => <div key={key} onClick={() => selectQuestion(data.answer,key)} style={{opacity: getKey === key && '1'}}>{data.question}</div>)}
            </div>}
        </div>
    </div>
}

export default CheckUser;