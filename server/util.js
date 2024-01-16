const responder = ({ res, success, message, data })=>{

   return res.json ({
    success,
    message,
    data: data || null

   });
   
}
export {responder};