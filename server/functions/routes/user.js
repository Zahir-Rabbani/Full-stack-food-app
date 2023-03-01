const router = require('express').Router()
const admin = require('firebase-admin');
let data =[];

router.get('/',(req, res)=>{
  return res.send("Inside the user router");
});

router.get("/jwtVerfication", async (req, res)=>{
    if(!req.headers.authorization){
        return res.status(500).send({msg: "Token Not Found"});
    }
    
    const token = req.headers.authorization.split(" ")[1];
    try {
       const decodedValue =  await admin.auth().verifyIdToken(token);
       if(!decodedValue){
            return res.status(500).json({success: false, msg: "Unauthorized access"});
       }
       return res.status(200).json({success: true, data: decodedValue});
       
    } catch (error) {
        return res.send({success: false, msg: `Error in extracting token : ${error}`});
    }
});

const listAllUsers = async (nextPageToken) => {
    admin.auth().listUsers(1000, nextPageToken).then((listUserResult)=>{
        listUserResult.users.forEach((rec)=> {
            data.push(rec.toJSON());
        });
        if(listUserResult.pageToken){
            listAllUsers(listUserResult.pageToken);
        }
    })
    .catch((er) => console.log(er));
};
listAllUsers();

router.get("/all", async (req, res)=>{
    listAllUsers();
    try {
        return res.status(200).send({success:true, data: data, dataCount: data.length});
    } catch (error) {
        return res.send({success:false, msg: `Error in listing users:, ${error}`});
    }
})
module.exports = router;