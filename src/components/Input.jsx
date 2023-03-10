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
        if(todoList.length ===0){
            const newTodo={
                id:1,
                title,
                desc,
                isDone : false
            }
        setTodoList([...todoList,newTodo])
        setTitle("")
        setDesc("")
        }else{
            let max_id =todoList[todoList.length -1]
            let num = max_id.id
            let max_num = num + 1
            const newTodo = {
                id:max_num,
                title,
                desc,
                isDone:false
            }
            setTodoList([...todoList,newTodo])
            setTitle("")
            setDesc("")
        }
        // const newTodo = {
        //     id : todoList.length + 1,
        //     title,
        //     desc,
        //     isDone : false
        // }
        // console.log(newTodo)
        // event.preventDefault();
        // setTodoList([...todoList, newTodo])
        // alert("할 일 등록 완료!")
        // setTitle("")
        // setDesc("")
    }

    return (
        <div className='input-form'>
            <form onSubmit={formSubmitHandler}>
                <div>
                제목 : <input className="input-box" type="text" value={title} required onChange={titleChangeHandler}/>
                </div>
                <div>
                내용 : <input className="input-box" type="text" value={desc} required onChange={descChangeHandler}/>
                </div>
                <input type="submit" value="추가하기" className='submit-btn'/>
            </form>
        </div>
    )
}

export default Input