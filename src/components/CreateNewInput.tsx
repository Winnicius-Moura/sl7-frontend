import { InputHTMLAttributes, useState } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props:InputProps){

    const [text, setText] = useState('')
 
    return (
        <div>
            <div>
                <input
                {...props}
                value={text}
                onChange={(inputDigitado) => setText(inputDigitado.target.value)}
                className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 text-white mt-20 mb-5'
                placeholder='Digite seu texto aqui: '
                type='text'
                name="text"
                />
                <div className="w-full h-32 py-3 px-4 bg-zinc-900 text-sm text-white rounded-md">
                    <p>
                        {text} 
                    </p>
                </div>
            </div>
        </div>
    )
}