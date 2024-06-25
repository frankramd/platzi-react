import './TodoList.css';

function TodoList(props){
    return (
        <ul className="TodoList">
            {props.children}
        </ul>
    );
  }

  /* Export Nombrado en vez de export default */
  export { TodoList };