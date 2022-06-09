const ToDoListItems = (props) => {


    return (
        <div>
            <form action="">
                <input type="checkbox" checked={props.completed} />
                <label>{props.task}</label>
            </form>
        </div>

    );
}

export default ToDoListItems;