import React, { FC, useEffect, useMemo, useState } from 'react'
import { Feedback } from '../models/FeedbackForm'

interface PropstWrapperForm{
    Form: Feedback
    wrapperVisible: boolean
    
}
const WrapperForm: FC<PropstWrapperForm> = ({Form, wrapperVisible})=>{
    const [styles, setStyles] = useState('feedbackForm__wrapper')
    useMemo(() => {
        if(wrapperVisible){
            setStyles('feedbackForm__wrapper' + ' ' + '_active')
        } else{
            setStyles('feedbackForm__wrapper')
        }
    },[wrapperVisible])
    return(
        <div className={styles}>

        </div>
    )
}
export default WrapperForm