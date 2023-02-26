import {useState} from "react";

const SortableList = () => {
    const [Tasks, setTasks] = useState(["Wash dishes", "Vacuum floor", "Cut grass", "Cook", "Exercise", "RnR", "Study"])
    const [dragItemIndex, setDragItemIndex] = useState();
    const [dragOverItemIndex, setDragOverItemIndex] = useState();

    const handleDragStart = (index) => {
        setDragItemIndex(index);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    const handleDrop = () => {
        const _Tasks = [...Tasks];
        const dragItem = _Tasks.splice(dragItemIndex, 1);
        _Tasks.splice(dragOverItemIndex, 0, dragItem);
        setTasks(_Tasks);
    }

    const handleDragEnter = index => {
        setDragOverItemIndex(index)
    }

    const handleDragLeave = (event) => {
        setDragOverItemIndex(undefined)
    }

    const handleDragEnd = event => {
        setDragItemIndex(undefined);
        setDragOverItemIndex(undefined);
    }


    return (
        <div>
            <div class="kanban_header">
            <header>Kanban Board - Stellar Culinary</header>
            <h1>Tasks</h1>
            <h2>Order | Title</h2>
            </div>
            <div className="tasklist">
                {Tasks.map((Task, index) => (
                    <li
                    key={index}
                    className={dragOverItemIndex === index ? "list-item next-position" : "list-item"}
                    draggable
                    onDragStart={()=> handleDragStart( index)}
                    onDragOver={handleDragOver}
                    onDrop={() => handleDrop(index)}
                    onDragEnter={() => handleDragEnter(index)}
                    onDragLeave={handleDragLeave}
                    onDragEnd={handleDragEnd}
                    >
                        <h3 class="h3style1">{index} | {Task}</h3>
                    </li>
                ))}
            </div>
            
            <footer class="kanban_footer">By: Vincent Kuan | <a href="https://github.com/VinceK15">My Github</a> | <a href="https://vincentkuan.herokuapp.com">My Website </a></footer>
        </div>
    )
}

export default SortableList;