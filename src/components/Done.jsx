function Done(props){

    return (
    <div className='todo-box'>
        <div className='content-box'>
        <div className='title'>{props.todoList.title}</div>
        <div className='desc'>{props.todoList.desc}</div>
        <div>
            <button className="btns" onClick={() => props.handleRemove(props.todoList.id)}>삭제</button>
            <button className="btns" onClick={() => props.handleChangeDone(props.todoList.id)}>취소</button>
        </div>
        </div>
    </div>
    )
}

export default Done