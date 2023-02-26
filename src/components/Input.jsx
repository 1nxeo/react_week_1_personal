import React, {useState} from "react"

function Input ({todoList,setTodoList}) {
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
  
    return (
      <div>
        <form className='input-form' onSubmit={formSubmitHandler}>
          제목 : <input type="text" value={title} required onChange={titleChangeHandler}/>
          내용 : <input type="text" value={desc} required onChange={descChangeHandler}/>
          <input type="submit" value="추가하기" className='submit-btn'/>
        </form>
      </div>
    )
  }

  export default Input