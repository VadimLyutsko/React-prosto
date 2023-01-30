// @ts-ignore
import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'Memo',
};


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>;
};


const Users = React.memo(UsersSecret);


export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['1111111', '2222222', '3333333', 'Vadim']);

    const newArray = useMemo(() => {
        return  users.filter(item => !item.toLowerCase().includes('2'));
    }, [users]);

    const addUser = () => {
        setUsers([...users, 'Petro' + new Date().getTime()]);
    };


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>;
};

//useCallBack

type BooksSecretPropsType = {
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret');
    return <div>
        <button onClick={() => props.addBook()}>Add book</button>
    </div>;
};

const Book = React.memo(BooksSecret);

export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['aaaaaaaa', 'bbbbbbbb', '22d2d', 'Harry']);

    const addNewBook=()=>{
        const newBook = books.filter(item => !item.toLowerCase().includes('2'));
        setBooks(newBook);
    }

    const memoizedBooks = useCallback(() => {
        addNewBook()
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedBooks}/>
    </>;
};



