function Done(props){

    

    return (
    <div className='todo-box'>
        <div className='content-box'>
        <div className='title'>{props.todolist.title}</div>
        <div className='desc'>{props.todolist.desc}</div><br/>
        <button className="btns" onClick={() => props.handleRemove(props.todolist.id)}>삭제</button>
        <button className="btns" onClick={() => props.handleChangeDone(props.todolist.id)}>취소</button>
        </div>
    </div>
    )
}

export default Done