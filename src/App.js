import React, {useState} from 'react';

function App() {
  const style = {
    height: '100vh',
      display: ' flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  }
  const [todo, setTodo] = useState();
  
  function onChangeTodo(event){
    const todoValue = event.target.value;
    setTodo(todoValue)
  }

  function onSubmitTodo(event){
    alert("등록 완료 !")
  }

  return (
    <div style={style}>
      <span>To do !</span>
      <form onSubmit={onSubmitTodo}>
        <input type="text" required value = {todo} onChange={onChangeTodo}/>
        <input type="submit" value="할일 등록하기"/>
      </form>
    </div>
  );
}

export default App;
