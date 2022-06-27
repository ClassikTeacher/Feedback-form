import FeedbackService from "../service/FeedbackService";
export class Feedback {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: Date
    message: string;


    constructor(fullName: string, email: string, phone: string, dateOfBirth: Date, message: string){
        this.fullName = fullName
        this.email = email
        this.phone = phone
        this.dateOfBirth = dateOfBirth
        this.message = message
    }

    initFeedbackForm(){
        return new Feedback('', '', '', new Date(-2222222222222), '')
    }

    validFullname(fullNameInput: string){
        
        if(/([a-zA-z]+\s)+([a-zA-z]+)/ig.test(fullNameInput) && fullNameInput.split(' ').length === 2 &&
         (fullNameInput.split(' ')[0].length >=3 && fullNameInput.split(' ')[0].length <=30) && (fullNameInput.split(' ')[1].length >=3 && fullNameInput.split(' ')[1].length <=30)){
            return true
        } 
        return false
    }

    validEmail(emailInput: string){
        return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(emailInput)
    }

    validPhone(phoneInput: string){
        const getInputNumbers = function (input:any) {
            return input.replace(/\D/g, '');
        }

        const nowPhone:string[] = []

        for(let i = 0 ; i < phoneInput.length; i++){
                        
            const numbItem = getInputNumbers(phoneInput[i])
            if(numbItem !== ''){
            nowPhone.push(numbItem)
            } 
        }
        
        if(nowPhone.length === 11 && (nowPhone[0] == '7' || nowPhone[0] == '8')){
            return true
            }
        return false
    }

    validDate(dateInput: Date){
        const oridinDate = new Date(-2222222222111)
        const dateBisth = new Date(dateInput)

        if(oridinDate > dateBisth){
            return false
        }
        const date = new Date(dateInput).toISOString().split('T')[0]
        return /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.test(date)
    }

    validMessage(message: string){
        
        if(message.length >= 10 && message.length <= 300)
        { 
            return true
        } else {
            return false
        }
    }
    validAllForm(){
        const checkFullname = this.validFullname(this.fullName)
        const checkEmail = this.validEmail(this.email)
        const checkPhone = this.validPhone(this.phone)
        const checkDate = this.validDate(this.dateOfBirth)
        const checkMessge = this.validMessage(this.message)

        if(checkFullname && checkEmail && checkPhone && checkDate && checkMessge){
            return true
        } 
        return false
    }

    async sendForm(){
        console.log(this.validFullname(this.fullName))
        console.log(this.validEmail(this.email))
        console.log(this.validPhone(this.phone))
        console.log(this.validDate(this.dateOfBirth))
        console.log(this.validMessage(this.message))
        const check = this.validAllForm()
      
        if(check){
            const date = new Date(this.dateOfBirth).toISOString().split('T')[0]
           
          
                const res = (await FeedbackService.sendFeedbackForm(this.fullName, this.email, this.phone, date, this.message))
                console.log((await res))
                const resMessahe = res.data.message
                return  res
           
           
        }

    }
}