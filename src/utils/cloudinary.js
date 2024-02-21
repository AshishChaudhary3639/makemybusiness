import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath) return null;
        // upload file on cloudinary

    let response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })

        console.log('file uplaoded on cloudinary',response)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}