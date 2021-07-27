const nodemailer=require('nodemailer');
const SendEmail=(email,firstname, id)=>{

    const transport=nodemailer.createTransport({
           service:'gmail',
            auth:{
                user:'hbo.globaliasoft@gmail.com',
                pass:'DAnFq+[9{(Qjx-s'
            }
        });
        const mailoption={
            form:"hbo.globaliasoft@gmail.com",
            to:email,
            subject:`Hello ${firstname}`,
            text:'It works',
            html:  `<h3><a href="http://localhost:3003/api/confirmemail/${id}">confirmemail</a></h3></h1><p>hi Thanks for joing with my site</p>`
        }
        
        
        transport.sendMail(mailoption,function(error,data){
            if(error)
            {
                console.log("error",error);
            }
            else
            {
                console.log("email send")
            }
        })
}

module.exports={
    SendEmail
}