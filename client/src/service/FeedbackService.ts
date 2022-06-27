import api from '../http'
import { AxiosResponse } from "axios";
import { FeedbackResponse } from '../response/FeedbackResponse'

export default class FeedbackService {
    static async sendFeedbackForm(fullName: string, email: string, phone: string, dateOfBirth: string, message: string){
        return api.post<FeedbackResponse>('/feedbackForm', {fullName, email, phone, dateOfBirth, message})
    }
}