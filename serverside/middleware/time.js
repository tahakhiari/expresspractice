let current=new Date()
let heurs=current.getHours()
let jour=current.getDay()
const timeMiddleware=(req,res,next)=>{
    console.log('heur:',heurs)
    console.log('jour:',jour)
    if(jour>5 && (heurs <9 || heurs > 17) ){
        res.status(500).json({message:'Currently closed,please return during working hours!'})
    }
}
module.exports=timeMiddleware