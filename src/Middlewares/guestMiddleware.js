function guestMiddleware(req,res,next){
   if (req.session.userId){
       return res.redirect("user/profile");
   }
   next()
}
module.exports = guestMiddleware;