const Task = require("../models/Task");
exports.createTasks = async(req,res)=>{
    try{
        const{title,description} =req.body;
        if(!title){
            return res.status(400).json({message:"Title is required"});
        }
        const task = await Task.create({
            user:req.user.id,
            title,
            description,
        });
        res.status(201).json(task);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};
//GET MY TASK

exports.getMyTasks = async(req,res)=>{
    try{
        const task = await Task.find({user:req.user.id});
        res.json(task);
    }catch (error){
     res.status(500).json({message:"Server error"});
    }
};

//UPDATE TASK

exports.updateTasks = async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({message:"Tassk not found"});
        }
        if(task.user.toString() !== req.user.id){

         return res.status(403).json({message:"Not authorised"});
        }
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;
         await task.save();
         res.json(task);
    }catch (error){
        res.status(500).json({message:"Server Error"});
    }
};

//DELETE TASK

exports.deleteTasks = async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(403).json({message:"Not authorised"});
        }
        await task.deleteOne();
         res.json({message:"Task Deleted"});
    }catch(error){
        res.status(500).json({message:"Server Error"});
    }
};