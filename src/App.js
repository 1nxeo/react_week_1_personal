import React, {useState} from 'react';
import "./App.css"
import Done from './components/Done';
import Working from './components/Working';
import Input from './components/Input';



function App() {

  const [todoList, setTodoList] =useState([
    {id:1, title:"리액트 공부하기", desc:"리액트 기초를 공부해봅시다.", isDone:true},
    {id:2, title:"저장을 생활화하자", desc:"들숨에 command 날숨에 s", isDone:false},
    {id:3, title:"격렬하게 아무것도 안하기", desc:"한량생활의 기초를 공부해봅시다.", isDone:false},
  ]);

  const removeTodoHandler = (id) => {
    const newestTodoList = todoList.filter((item)=>item.id !== id);
    setTodoList(newestTodoList)
    alert("삭제 완료!")
  }

  const doneChangeHandler = (id) => {
    const newTodos = todoList.map((item) => {
      // console.log(item)
      if (item.id === id){
        return {...item,isDone : !item.isDone}
      }
      return item;
    });

    setTodoList(newTodos)
    alert("good!")
  }

  return (
    <div className='web'>
      <div className='app-style'>
      <div className='header'>
        <div className='page-title'>My Todo List</div>
        <div></div>
        <div className='name-tag'>1nxeo</div>
      </div>
      <Input todoList={todoList} setTodoList={setTodoList}/>
      <h1>Working 🔥</h1>
      <div className='todolist-box'>
        {todoList.map((todoList) => {
          if(todoList.isDone === false){
            return <Working todoList ={todoList} key={todoList.id} handleRemove={removeTodoHandler} handleChangeDone={doneChangeHandler}/>
          }else{
            return null
          }
        })}
      </div>
      <h1>Done 🥨</h1>
      <div className='todolist-box'>
        {todoList.map((todoList) => {
          if (todoList.isDone === true) {
            return <Done todoList={todoList} key={todoList.id} handleRemove={removeTodoHandler} handleChangeDone={doneChangeHandler}/>;
          }else{
            return null
          }
        })}
      </div>
    </div>
    </div>
  );
}

export default App;
