import React, { FC } from 'react'
import Button from '../button/Button'
import FeedbackMessage from '../FeedbackMessage'
import Input from '../input/Input'
import {Feedback} from '../../models/FeedbackForm'


interface FeedbackFormProps{
    Form: Feedback
    setWrapperVisible: (boolean: boolean) => void
    responseMessage: string | undefined
    setResponseMessage: (string: string | undefined) => void
}



const FeedbackForm: FC<FeedbackFormProps> = ({Form, setWrapperVisible, responseMessage, setResponseMessage})=>{

    return(
        <form action='#' id='feedbackForm' className='feedback'>
            <h1> Feedback Form</h1>
            <Input 
            nameInput={'Full name'} 
            typeInput={'text'}
            responseMessage={responseMessage}
            Form={Form}
            />
            <Input 
            nameInput={'Email'}
            typeInput={'text'} 
            responseMessage={responseMessage}
            Form={Form}
            />
            <Input 
            nameInput={'Phone'} 
            typeInput={'text'}
            responseMessage={responseMessage}
            Form={Form}
            />
             <Input 
            nameInput={'Date'} 
            typeInput={'date'}
            responseMessage={responseMessage}
            Form={Form}
            />

            <FeedbackMessage 
                nameInput={'Message'}
                responseMessage={responseMessage}
                Form={Form}
            />
        
             <Button 
                Form={Form}
                setWrapperVisible={setWrapperVisible}
                responseMessage={responseMessage}
                setResponseMessage={setResponseMessage}
             />
        </form>
    )
}
export default FeedbackForm