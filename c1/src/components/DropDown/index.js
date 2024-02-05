export const DropDown = (props) => {

    const whenOnChangeIsFired = (event)=>{
        props.changeValue(event.target.value);
    }

    return (
        <div>
            <label>{props.label}</label>
            <select value={props.currentValue} onChange={whenOnChangeIsFired}>
                {
                    props.items.map(item =>{              
                        return <option key={item}>{item}</option>
                     })}
            </select>
        </div>
    )
}
