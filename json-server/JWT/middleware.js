let isAuth=async function(req, res, next ){
    var _JWT=require('../JWT/_JWT');
    var _token= req.headers.authorization;
    if(_token){
        try {
            var audata=await _JWT.check(_token);
            req.auth=audata;
            next();
        } catch (error) {
            return res.send({data:"ban chua giu kem data"});
        }
     
    }
        else{
            return res.send({data:"ban chua co ma token"});}
    console.log(req.headers);

}
module.exports = {
    isAuth:isAuth,
}