const db=require('../Models/index')
const Contact_model=db.contact


exports.create_contact=async(req,res)=>{
    try{
        const{Name,Email,phone,address}=req.body
        const verify_email=await Contact_model.findOne({where:{Email:Email}})
        if(verify_email){
            return res.status(404).send({code:404,message:"Email Already Exsist"})
        }
        else{
            const create_contact=await Contact_model.create({
                Name,Email,phone,address
            })
            return res.status(200).send({code:200,message:"Contact Created Successfully!!",data:create_contact})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send({code:500,message:"Internal Server "})
    }
}

exports.get_contact_details_id=async(req,res)=>{
    try{
        const _id=req.params.id
        const find_contact=await Contact_model.findOne({where:{id:_id}})
        if(find_contact){
            return res.status(200).send({code:200,message:"Contact Found",data:find_contact})
        }
        else{
            return res.status(404).send({code:404,message:"No Contact Found"})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).send({code:500,message:"Internal server "})
    }
}

exports.get_all_contacts=async(req,res)=>{
    try{
        const get_all_contacts=await Contact_model.findAll({where:{status:"ACTIVE"}})
        if(get_all_contacts.length!==0){
            return res.status(200).send({code:200,message:"ALl COntacts",data:get_all_contacts})
        }
        else{
            return res.status(404).send({code:404,message:"No contacts found"})
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).send({code:500,message:"Inertnal Server"})
    }
}

exports.update_contact=async(req,res)=>{
    try{
        const{Name,Email,phone,address,_id}=req.body
        // const _id=req.params.id
        const find_contact=await Contact_model.findOne({where:{id:_id}})
        if(find_contact){
            const update_details=await Contact_model.update({
                Name:Name,
                Email:Email,
                phone:phone,
                address:address
            },{where:{id:_id}})
            res.status(200).send({code:200,message:"Data Updataed",data:update_details})
        }
        else{
            return res.status(404).send({code:404,message:"No contacts found"})
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).send({code:500,message:"Inertnal Server"})
    }
}

exports.delete_contact=async(req,res)=>{
    try{
        const _id=req.params.id
        const find_contact=await Contact_model.findOne({where:{id:_id}})
        if(find_contact){
            const update_details=await Contact_model.update({
                status:"INACTIVE"
            },{where:{id:_id}})
            res.status(200).send({code:200,message:"Data Deleted"})
    }
}
    catch(err){
        console.log(err)
        return res.status(500).send({code:500,message:"Inertnal Server"})   
    }
}