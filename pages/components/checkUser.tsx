import React, { FC, useState } from "react"
import Image from 'next/image'

interface CheckUserInterface {
    title: string,
    data: string,
    questions: {
        question:string,
        selected: boolean,
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

    const selectQuestion = (answer,key) => {
        questions.map(data => data.selected = false)
        questions[key].selected = true
        setAnswer(answer)
    }

    return <div className="class-checkUser">
        <div>
            <div style={{
                height:
                    answer.yes <= 5 ? '60%' :
                    answer.yes === 6 ? '65%' :
                    answer.yes === 7 ? '70%' :
                    answer.yes === 8 ? '75%' :
                    answer.yes === 9 ? '80%' :
                    answer.yes === 10 ? '85%' :
                    answer.yes === 11 ? '90%' :
                    answer.yes === 12 ? '95%' :
                    answer.yes === 13 ? '100%' : '0'
            }}>
                <Image src="/image/yes.png" alt="yes icon" width={145} height={145} />
                <span>
                    <p>SI</p>
                    <p>{answer.yes}</p>
                </span>
            </div>
            <div style={{
                height:
                    answer.not <= 5 ? '60%' :
                    answer.not === 6 ? '65%' :
                    answer.not === 7 ? '70%' :
                    answer.not === 8 ? '75%' :
                    answer.not === 9 ? '80%' :
                    answer.not === 10 ? '85%' :
                    answer.not === 11 ? '90%' :
                    answer.not === 12 ? '95%' :
                    answer.not === 13 ? '100%' : '0'
            }}>
                <Image src="/image/no.png" alt="no icon" width={145} height={145} />
                <span>
                    <p>NO</p>
                    <p>{answer.not}</p>
                </span>
            </div>
            <div style={{
                height:
                    answer.maybe <= 5 ? '60%' :
                    answer.maybe === 6 ? '65%' :
                    answer.maybe === 7 ? '70%' :
                    answer.maybe === 8 ? '75%' :
                    answer.maybe === 9 ? '80%' :
                    answer.maybe === 10 ? '85%' :
                    answer.maybe === 11 ? '90%' :
                    answer.maybe === 12 ? '95%' :
                    answer.maybe === 13 ? '100%' : '0'
            }}>
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
                {questions.map((data,key) => <div key={key} onClick={() => selectQuestion(data.answer,key)} style={{opacity: data.selected && '1'}}>{data.question}</div>)}
            </div>
        </div>
    </div>
}

export default CheckUser;