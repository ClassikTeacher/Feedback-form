import React, { useMemo, useState } from 'react'
import FeedbackForm from './feedbackForm/FeedbackForm'
import { Feedback } from '../models/FeedbackForm'
import ResponceMessage from './ResponseMessage'
import WrapperForm from './WrapperForm'

const FeedbackFormContainer = ()=>{
    const [Form, setForm] = useState(new Feedback('', '', '', new Date(-2222222222222), ''))
    const [wrapperVisible, setWrapperVisible] = useState(false)
    const [responseMessage, setResponseMessage] = useState<string | undefined>('')
    
    useMemo(() => {
        setWrapperVisible(false)
        if(responseMessage === 'success'){
           const newForm = new Feedback('', '', '', new Date(-2222222222222), '') 
           setForm(newForm)
        }
        
    },[responseMessage])
  

    return(
        <div className='feedbackFormContainer'>
            <FeedbackForm
                Form={Form}
                setWrapperVisible={setWrapperVisible}
                responseMessage={responseMessage}
                setResponseMessage={setResponseMessage}
            />
            <ResponceMessage 
                responseMessage={responseMessage}
                setResponseMessage={setResponseMessage}
                Form={Form}
            />
            <WrapperForm 
                Form={Form}
                wrapperVisible={wrapperVisible}
                
            />
        </div>
    )
}
export default FeedbackFormContainer