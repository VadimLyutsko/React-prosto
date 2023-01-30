import {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>;


export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    };
    return <>  <input onChange={onChangeHandler}
    /> - {value} </>;
};

export const GetValueUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    };

    return <>  <input ref={inputRef}/>
        <button onClick={save
        }>save
        </button>


        - actual value: {value} </>;
};


export const SomeControlledInput = () => <input value={'SomeNewName'}/>;



export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>('2');
    const onChangeInputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };
    return <select value={parentValue} onChange={onChangeInputHandler}>
        <option >none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    };
    return <input type='checkbox' checked={parentValue}   onChange={onChangeInputHandler}/>;
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    };
    return <input value={parentValue} onChange={onChangeInputHandler}/>;
};

