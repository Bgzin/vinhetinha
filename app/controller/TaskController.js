//CRUD

import Task from "@/models/Task";
import connectMongo from "@/utils/dbConnect";

//carregar Tasks
export const getTasks = async (req, res) => {
    await connectMongo();
    try {
        const tasks = await Task.find({ userId: req.user.userId });
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ error });
    }
}

//Criar Tarefa
export const addTask = async (req, res) => {
    const { title } = req.body;
    await connectMongo();
    try {
        const newTask = new Task({
            title,
            userId: req.user.userId, // Associa a tarefa ao usuário logado
        });
        await newTask.save();
        res.status(201).json({ task: newTask });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar tarefa' });
    }
};

//Atualizar Tarefa
export const updateTask = async (req, res) => {
    const { id } = req.query;
    const data = req.body;
    await connectMongo();

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: id, userId: req.user.userId },
            { data },
            { new: true }
        );
        if (!updatedTask) return res.status(404).json({
            message: 'Tarefa não encontrada'
        });
        res.status(200).json({ task: updatedTask });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar tarefa' });
    }
};

// Deletar Tarefa
export const deleteTask = async (req, res) => {
    const { id } = req.query;
    await connectMongo();

    try {
        const deletedTask = await Task.findOneAndDelete({
            _id: id, userId: req.user.userId
        });
        if (!deletedTask) return res.status(404).json({
            message: 'Tarefa não encontrada'
        });
        res.status(200).json({
            message: 'Tarefa deletada com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao deletar tarefa'
        });
    }
};
