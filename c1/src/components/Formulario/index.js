import { InputField } from '../InputField';
import { DropDown } from '../DropDown';
import { Botao } from '../Botao';
import { useState } from 'react';

export const Formulario = (props) => {

    const items = ['Programador', 'UX;UI','Product Owner'];

    const [name,setName] = useState('Adriano Maurmann');
    const [email,setEmail] = useState('');
    const [job,setJob] = useState('');

    const save = (event) => {
        event.preventDefault();
        props.whenFormIsSubmited({name,email,job})
    }

    return (
        <section>
            <form onSubmit={save}>
                <InputField 
                    currentValue={name} 
                    changeValue={value => setName(value)}
                    label="name" 
                    placeholder="Please inform your name" 
                    obrigatorio={true}></InputField>
                <InputField 
                    currentValue={email} 
                    changeValue={value => setEmail(value)}
                    label="email" 
                    placeholder="Please inform your email"></InputField>
                <DropDown 
                    currentValue={job}
                    changeValue={value=> setJob(value)}
                    label="job" 
                    items={items}></DropDown>
                <Botao                  
                    texto="Salvar"></Botao>
            </form>
        </section>
    )
}
