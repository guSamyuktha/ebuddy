const db = require('../db')

const getdb=db.getConnection()

exports.aadhar=(req,res)=>{
  console.log(req.body)
  const {name,Fname,dob,desc,gender,address,district}=req.body

  
  getdb.query(
     "INSERT INTO aadhar SET ?",
     { name: name, Fname: Fname, dob: dob, gender: gender, address: address, district: district },
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("index", {
           message: "data sent sucessfully",
         });
       }
     }
   );
 
   
 //  res.send("form submited")
}


// exports.display_complaint=(req,res)=>{

  
//   getdb.query(
//      "SELECT * from aadhar",
//      (error, results) => {
//        if (error) {
//          console.log(error);
//        } else {
//          console.log(results);
//          let i = 1;
//           results.forEach((el) => {
//           el.s_no = `${i++}.`;
//           return el;
//           })
//          return res.send(results);
      
//        }
//      }
     
//    );
   
   
// }
