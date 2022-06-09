import data from '../data';
import ToDoListItems from './ToDoListItems';

const ToDoList = () => {
    return (
        <section>
            {
                data.map((ele, i) =>
                    <ToDoListItems
                        key={i}
                        completed={ele.completed}
                        task={ele.task}
                    />
                )
            }
        </section>
    );
}

export default ToDoList;