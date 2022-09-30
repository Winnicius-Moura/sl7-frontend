import { useState } from "react";
import { useTextReducer, addText } from "../store/reducers/textReducer";
import { useSelector, useDispatch } from 'react-redux';


interface NewInputProps {
    name: '',
}

export function NewInputRedux(props: NewInputProps){

    const [text, setText] = useState("")

    const dispatch = useDispatch();
 
    const addNote = useSelector(useTextReducer)

    return (
        <div>
            <input value={text} onChange={(event)=> setText(event.target.value)} type="text" name="note" placeholder="Digite o texto"
            className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 text-white mt-20 mb-5" />
            <button 
            className="py-1 px-2 bg-violet-500 text-white hover:bg-violet-600 rounded-md items-center"
            onClick={() => dispatch(addText(text))}>Add Texto</button>

            <div className="w-58 h-32 py-3 px-4 bg-zinc-900 text-sm text-white">
                <ul>
                    <li>
                    {
                        addNote.map(addText => <li>{addText.name}</li>)    
                    }
                    </li>
                </ul>
            </div>
        </div>
    )
}