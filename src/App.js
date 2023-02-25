import React, {useState} from 'react';
import "./App.css"
import Done from './components/Done';
import Working from './components/Working';


function App() {

  const [todoList, setTodoList] =useState([
    {id:1, title:"리액트 공부하기", desc:"리액트 기초를 공부해봅시다.", isDone:true},
    {id:2, title:"저장을 생활화하자", desc:"들숨에 command 날숨에 s", isDone:false},
    {id:3, title:"격렬하게 아무것도 안하기", desc:"한량생활의 기초를 공부해봅시다.", isDone:false},
  ]);

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  const descChangeHandler = (event) => {
    setDesc(event.target.value)
  }

  const formSubmitHandler = (event) => {
    const newTodo = {
      id : todoList.length +1,
      title,
      desc,
      isDone : false
    }
    event.preventDefault();
    setTodoList([...todoList, newTodo])
    alert("할 일 등록 완료!")
    setTitle("")
    setDesc("")
  }

  const removeTodoHandler = (id) => {
    const newestTodoList = todoList.filter((todolist)=>todolist.id !== id);
    setTodoList(newestTodoList)
    alert("삭제 완료!")
  }

  const cancelChangeHandler = (id) => {
    const newTodos = todoList.map((item) => {
      if (item.id === id){
        return {...item,isDone:!item.isDone}
      }
      return item;
    });

    setTodoList(newTodos)
    alert("good!")
  }

  return (
    <div className='app-style'>
      <div className='header'>
        <span>My Todo List</span>
      </div>
      <form className='input-form' onSubmit={formSubmitHandler}>
        제목 : <input type="text" value={title} required onChange={titleChangeHandler}/>
        내용 : <input type="text" value={desc} required onChange={descChangeHandler}/>
        <input type="submit" value="추가하기" className='submit-btn'/>
      </form>
      <h1>Working🔥</h1>
      <div className='todolist-box'>
        {todoList.map((todolist) => {
          if(todolist.isDone === false){
            return <Working todolist ={todolist} key={todolist.id} handleRemove={removeTodoHandler} handleChangeDone={cancelChangeHandler}/>
          }else{
            return null
          }
        })}
      </div>
      <h1>Done🥨</h1>
      <div className='todolist-box'>
        {todoList.map((todolist) => {
          if (todolist.isDone === true) {
            return <Done todolist={todolist} key={todolist.id} handleRemove={removeTodoHandler} handleChangeDone={cancelChangeHandler}/>;
          }else{
            return null
          }
        })}
      </div>
    </div>
  );
}

export default App;
