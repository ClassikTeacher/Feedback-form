import React, { FC, useEffect, useMemo, useState } from 'react'
import { Feedback } from '../models/FeedbackForm'

interface PropstResponseMessage{
    Form: Feedback
    responseMessage: string | undefined
    setResponseMessage: (string: string | undefined) => void
}

const ResponseMessage: FC<PropstResponseMessage> = ({Form, responseMessage, setResponseMessage})=>{
    const [classes, setClasses] = useState('feedbackForm__response')
    

    useMemo(() => {
        
    },[])
    
    return(
        <div className={classes}>
            {responseMessage}
        </div>
    )
}
export default ResponseMessage