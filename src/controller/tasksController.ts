//export function GetTasks() { return { name: 'Getting Tasks' }}

class TasksController {

    public getTasks() {
        const tasks = { name: 'Getting Tasks' };
        return tasks;
    }
    
}

const tasksController = new TasksController();
export default tasksController;