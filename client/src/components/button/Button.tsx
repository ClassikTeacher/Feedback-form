import { rejects } from 'assert';
import { send } from 'process';
import React, { FC } from 'react'
import { Feedback } from '../../models/FeedbackForm'

interface PropsButton{
    Form: Feedback;
    setWrapperVisible: (boolean: boolean) => void
    responseMessage: string | undefined
    setResponseMessage: (string: string | undefined) => void
}

const Button: FC<PropsButton> = ({Form, setWrapperVisible, responseMessage, setResponseMessage})=>{

  

    function click(e:any){
        e.preventDefault()
        if(Form.validAllForm()){
            setWrapperVisible(true) 
        }
        
        Form.sendForm().then((response) => { 
             setResponseMessage(response?.data.message) 
             setWrapperVisible(false)
        })
        .catch(rejects => {
            setResponseMessage(rejects.message)
            setWrapperVisible(false)
    })

    
      
        
    }

    return(
        <button onClick={e => click(e)} type='submit' className='feedback__button'>Отправить</button>
    )
}
export default Button