import React, { useState } from "react";

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [taskDate, setTaskDate] = useState("");

    const permanentEvents = [
        { id: 1, title: "Submit Project Report", date: "2024-12-05" },
        { id: 2, title: "Final Exam Preparation", date: "2024-12-15" },
        { id: 3, title: "Group Discussion on AI Trends", date: "2024-12-20" },
    ];

    const addTask = () => {
        if (newTask.trim() && taskDate) {
            setTasks([
                ...tasks,
                { id: Date.now(), title: newTask, date: taskDate },
            ]);
            setNewTask("");
            setTaskDate("");
        }
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="tasks-page">
            <div className="tasks-container">
                <h1>Tasks & Events</h1>
                <p>Manage your tasks and keep track of upcoming events.</p>

                {/* Permanent Events */}
                <div className="permanent-events">
                    <h2>Permanent Events</h2>
                    <ul>
                        {permanentEvents.map((event) => (
                            <li key={event.id} className="event-item">
                                <strong>{event.title}</strong> <br />
                                <span className="event-date">{event.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customizable To-Do List */}
                <div className="to-do-list">
                    <h2>Your To-Do List</h2>
                    <div className="add-task-container">
                        <input
                            type="text"
                            placeholder="Add a new task..."
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            className="task-input"
                        />
                        <input
                            type="date"
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className="date-input"
                        />
                        <button onClick={addTask} className="add-task-button">
                            Add Task
                        </button>
                    </div>
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id} className="task-item">
                                <div>
                                    <strong>{task.title}</strong> <br />
                                    <span className="task-date">
                                        {task.date}
                                    </span>
                                </div>
                                <button
                                    onClick={() => removeTask(task.id)}
                                    className="remove-task-button"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TasksPage;
