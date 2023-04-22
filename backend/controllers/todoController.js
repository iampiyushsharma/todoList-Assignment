const todoSchema = require('../models/todoModel')

module.exports.getTODO = async (req,res) => {
    const toDo = await todoSchema.find()
    res.send(toDo)
}

module.exports.saveTODO = async(req,res) =>{
    const {text} = req.body;
   

    todoSchema.create({text})
    .then((data)=>{
        console.log("added to database")
        console.log(data);
        res.send(data)
    })

}

module.exports.updateTODO = async(req,res)=>{
    const {_id, text} = req.body
    todoSchema.findByIdAndUpdate(_id, {text})
    .then(()=>res.send("updated successfully"))
    .catch((err)=>console.log(err))
}

module.exports.deleteTODO = async(req,res)=>{
    const {_id} = req.body
    todoSchema.findByIdAndDelete(_id)
    .then(()=>res.send("Deleted successfully"))
    .catch((err)=>console.log(err))
}

