import { updateTask, deleteTask } from "@/controllers/TaskController";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    try {
        const data = await req.json();
        const task = await updateTask(params.id, data);
        if (!task) {
            return NextResponse.json({ success: false, message: 'Task not found' }, { status: 400 });
        }
        return NextResponse.json({ success: true, data: task });
    } catch (error) {
        console.error('PUT request error:', error);
        return NextResponse.json({ success: false, message: 'Failed to update Task' }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        await deleteTask(params.id);
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        console.error('DELETE request error:', error);
        return NextResponse.json({ success: false, message: 'Failed to delete Task' }, { status: 500 });
    }
}
