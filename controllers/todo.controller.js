const TodoModel=require('../models/todo.model')

const createTodo=async(req, res, next)=>{
    try{
        const createdModel=await TodoModel.create(req.body)
        res.status(201).json(createdModel)
    }
    catch(error){
        next(error)
    }
}
const getTodos=async (req, res, next)=>{
    try{
        const allTodos=await TodoModel.find({});
        res.status(200).json(allTodos);
    }
    catch(error){
        next(error)
    }
}
const getTodoById = async (req, res, next) => {
    try {
        const todoModel = await TodoModel.findById(req.params.todoId);
        if (todoModel){
            res.status(200).json(todoModel);
        } else{
            res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
};
const updateTodo=async(req, res, next)=>{
    try {
        const updateTodo=await TodoModel.findByIdAndUpdate(
            req.params.todoId,
            req.body,
            {
                new:true,
                useFindAndModify:false
            }
        );
        if(updateTodo){
            res.status(200).json(updateTodo);
        } else{
            res.status(404).send();
        }
    } catch (error) {
        next(error);
    }
};
const deleteTodo = async (req, res, next) => {
    try {
        const deleteTodo = await TodoModel.findByIdAndDelete(req.params.todoId );
        if (deleteTodo) {
            res.status(500).json({ message: "Todo deleted successfully" });
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (error) {
        next(error); // Ensure proper forwarding of errors
    }
};




module.exports={createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
}