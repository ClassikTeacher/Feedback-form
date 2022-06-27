
class FeedbackFormController{
    async sendingForm(req, res){
        try{
            const {fullName, email, phone, dateOfBirth, message} = req.body
            if(fullName && email && phone && dateOfBirth && message){
                res.header("Access-Control-Allow-Origin", "*")
                return res.status(200).json({message: 'success'})
            } 
            c
            return res.json({message: 'error'})
            
        }catch(e){

            res.json({message: 'error'})
        }
        
    }

    async getForm(req, res){
        try{
            res.header("Access-Control-Allow-Origin", "*")
            res.json({message: 'success'})
        }catch(e){

            res.json({message: 'error'})
        }
    }
}

module.exports = new FeedbackFormController()