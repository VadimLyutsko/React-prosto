// @ts-ignore
import React, {useCallback, useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo',
};


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('SimpleExample');

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render (as componentDidMount)');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render and every counter changes');
        document.title = counter.toString();
    }, [counter]);


    return <>
        Hello {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
    </>;
};

export const SetTimeOutSimpleExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('setTimeOutExample');

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1);
        }, 1000);
    }, []);

    return <>
        Hello Counter:{counter}
    </>;
};










