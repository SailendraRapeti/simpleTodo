const Item=(props)=>{
    const {each,onDelete}=props
    const {id,title}=each
    const button=()=>{
        onDelete(id)

    }
    return(
        <div>
            <li>
                <p>{title}</p>
                <button onClick={button}>delete</button>
            </li>
        </div>
    )
}
export default Item