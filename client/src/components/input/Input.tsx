import React, { FC, useEffect, useState } from 'react'
import { useMemo } from 'react'
import { Feedback } from '../../models/FeedbackForm'



interface InputProps{
    nameInput:string
    typeInput: string
    Form: Feedback
    responseMessage: string | undefined;
    
}

const Input: FC<InputProps> = ({Form, nameInput, typeInput, responseMessage})=>{
    const [styles, setStyles] = useState<string>('feedback__input')
    const [stylesError, setStylesError] = useState<string>('feedback__errorLabel')
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if(nameInput === 'Full name'){
            setStyles('feedback__input' + ' ' + '__fullName')
        }
    
    },[])

    useMemo(() => {
        if(responseMessage === 'success'){
            setInputValue('')
        }
    },[responseMessage])

    function focusOffInput(e: any){
        switch(nameInput){
            case 'Full name':
                const validName = Form.validFullname(e.target.value)
                setInputValue(e.target.value)
                Form.fullName = e.target.value
                if(!validName){
                    setStylesError('feedback__errorLabel_visible')
                } else {
                    setStylesError('feedback__errorLabel')
                    setInputValue(e.target.value)
                }
               
            break
            case 'Email':
                const validEmail = Form.validEmail(e.target.value)
                setInputValue(e.target.value)
                Form.email = e.target.value
                if(!validEmail){
                    setStylesError('feedback__errorLabel_visible')
                } else {
                    setStylesError('feedback__errorLabel')
                 
                }
             
            break
            case 'Phone':
                const getInputNumbers = function (input:any) {
                    return input.replace(/\D/g, '');
                }
                const phoneInputs = e.target.value
                const nowPhone = []
                const newPhone = []
                for(let i = 0 ; i < phoneInputs.length; i++){
                    
                    const numbItem = getInputNumbers(phoneInputs[i])
                    if(numbItem !== ''){
                    nowPhone.push(numbItem)
                    } 
                }
                
                for(let i =0 ; i < nowPhone.length; i++){
                    const numbItem = getInputNumbers(nowPhone[i])
                    if(numbItem !== '' && i < 11 && (nowPhone[0] == 7 || nowPhone[0] == 8)){
                        setStylesError('feedback__errorLabel')
                        if(i === 0 && nowPhone[0] == 7){
                            newPhone.push('+')
                        }
                        if(i === 1){
                            newPhone.push(' (')
                        }
                        if(i === 4){
                            newPhone.push(') ')
                        }
                        if(i === 7){
                            newPhone.push('-')
                        }
                        if(i === 9){
                            newPhone.push('-')
                        }
                        newPhone.push(numbItem)
                    } else{
                    
                      setStylesError('feedback__errorLabel_visible')  
                    }
                    if(!getInputNumbers(phoneInputs[phoneInputs.length-1]) || nowPhone.length < 11){
                        setStylesError('feedback__errorLabel_visible')
                    }
                    
                }
                e.target.value = newPhone.join('')
                setInputValue(e.target.value)
                Form.phone = newPhone.join('')

            break
            case 'Date':

                Form.dateOfBirth = e.target.value
                const validDate = Form.validDate(e.target.value)
                if(!validDate){
                    setStylesError('feedback__errorLabel_visible')
                } else {
                    setStylesError('feedback__errorLabel')
                    setInputValue(e.target.value)
                }
          
            break
        }

    }
  

    return(
        <div className='feedback__inputWrapper'>
            <label htmlFor={`form${nameInput}`} className='feedback__label'>{nameInput}</label>
            <input id={`form${nameInput}`} type={typeInput} className={styles} value={inputValue} onChange={e => focusOffInput(e)} onBlur={e => focusOffInput(e)} />
            <label htmlFor="" className={stylesError}>{`Ошибка в поле ${nameInput}`}</label>
        </div>
    )
    }
export default Input