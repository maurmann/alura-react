export const InputField = (props)=> {

    const whenOnChangeIsFired = (event) => {
        props.changeValue(event.target.value);
    }
 
    return (
        <div>
            <label>{props.label}</label>
            <input 
                type="text" 
                placeholder={props.placeholder} 
                required="props.obrigatorio" 
                value={props.currentValue} 
                onChange={whenOnChangeIsFired}></input>
        </div>
    )
}
