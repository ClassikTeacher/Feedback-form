import React, { FC, useMemo, useEffect, useState } from 'react'
import { Feedback } from '../models/FeedbackForm'

interface InputProps{
    nameInput:string
    Form: Feedback
    responseMessage: string | undefined
}

const FeedbackMessage: FC<InputProps> = ({nameInput, Form, responseMessage})=>{
    const [stylesError, setStylesError] = useState<string>('feedback__errorLabel')
    const [textarea, setTextarea]= useState('')
    

    let input:Element | null =null

    useMemo(() => {
        if(responseMessage === 'success'){
            setTextarea('')
        }
    },[responseMessage])
    


    function focusOffInput(e: any){
        const valid = Form.validMessage(e.target.value)
        setTextarea(e.target.value)
        Form.message = e.target.value
        if(!valid){
            setStylesError('feedback__errorLabel_visible')
        } else {
            setStylesError('feedback__errorLabel')
        }
    }



    return(
        <div className='feedback__inputWrapper'>
        <label htmlFor={`form${nameInput}`} className='feedback__label'>{nameInput}</label>
        <textarea id={`form${nameInput}`} name={nameInput} className={'feedback__inputMessage'} value={textarea} onChange={e => focusOffInput(e)}></textarea>
        
        <label htmlFor="" className={stylesError}>{`Ошибка в поле ${nameInput}`}</label>
        </div>
    )
}
export default FeedbackMessage