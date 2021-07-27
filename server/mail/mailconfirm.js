const nodemailer=require('nodemailer');
const MailConfirm=(id)=>{
    console.log("emailemailemail",id);
        const mailoption={
            html:  `<h3><a href="http://localhost:3003/api/confirmemsail/${id}">confirmemail</a></h3></h1><p>hi Thanks for joing with my site</p>`
        }
        
            if(mailoption)
            {
                console.log("Email activated");
            }
            else
            {
                console.log("Email not activated");
            }
}

module.exports={
    MailConfirm
}