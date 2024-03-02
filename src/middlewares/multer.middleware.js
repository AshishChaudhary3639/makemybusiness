import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (file, req, cb)=>{
      const uploadedFileDirectoryName = "./public/uploads";
      if(!fs.existsSync(uploadedFileDirectoryName)){
        fs.mkdirSync(uploadedFileDirectoryName);
      }
      cb(null, uploadedFileDirectoryName);
  },
  filename: (file, req, cb)=>{
      const uploadedFileName = `${Date.now()}-${file.originalname}`;
      cb(null, uploadedFileName);
  }
})

const upload = multer({storage});


// validating uploaded files
const validateFileAndUpload = (req, res, next) =>{

  upload.array("images", 5)(req, res, (err)=>{

      if(err){
          return res.status(400).json({message: "More than 5 files are uploaded"});
      }

      if(!req.files){
          return res.status(400).json({message: "Files are required"});
      }

      const files = req.files;
      const errors = [];

      files.forEach(file => {
          const allowedType = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
          const maxSize = 1*1024*1024; //1MB

          if(!allowedType.includes(file.mimetype)){
              errors.push(`File type invalid ${file.originalname}`);
          }

          if(file.size > maxSize){
              errors.push(`File too large ${file.originalname}`);
          }
      });

      if(errors.length > 0){
          files.forEach((file)=>{
              fs.unlinkSync(file.path);
          })
          return res.status(400).json(errors);
      }
      
      req.fiels = files;
      next();
  })
  
}

export default validateFileAndUpload;