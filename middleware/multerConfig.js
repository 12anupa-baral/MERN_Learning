const multer = require('multer')

const storage = multer.diskStorage({

    //Place to keep file
    destination : function(req,file,cb){
        cb(null,'./Storage') // cb(error,success)
        // cb(null,'https://cloudinary/mern') 
    }, 

    //filename
    filename : function(req,file,cb){
        cb(null,"Anupa-" + file.originalname)
    }
})

module.exports = {
    multer, 
    storage
}