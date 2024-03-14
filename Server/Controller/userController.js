import User from "../modules/userModules.js"

export const create =async (req,res)=>{
    try{
        const userData =new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"User data not found"})
        }
        const saveData =await userData.save();
        res.status(200).json({data:saveData,msg:"User Created Sucessfully"})
    } catch (error){
        res.status(500).json({error:error})
    }
}
export const getAll =async (req,res)=>{
    try{
        const userData =await User.find();
        console.log("userData",userData)
        if(!userData){
            res.status(200).json({msg:"User data not found"})
        }
        res.status(200).json(userData)
    }
    catch (error){
        res.status(500).json({error:error})
    }
}
export const getOne =async (req,res)=>{
    try{
        const id = req.params.id;
        const userExists =await User.findById(id)
        if(!userExists){
            return res.status(404).json({msg:"User data not found "});
        }
        res.status(200).json(userExists)
    }
    catch (error){
        res.status(500).json({error:error});
    }
}
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateData) {
            return res.status(401).json({ msg: "User data not found" });
        }
        res.status(200).json({ data: updateData, msg: "User Updated Successfully" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const deleteUser =async(req,res)=>{
    try{
        const id =req.params.id;
        const userExists =await User.findById(id);
        if(!userExists){
            return res.status(404).json({msg:"User not exists"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User deleted Successfully"})

    }
    catch(error){
        res.status(500).json({error:error})
    }
}