import React, { useCallback, useState } from 'react'
import Editor from './editor'
import Preview from './preview'
import './app.scss'

const App: React.FC = () => {
    const [doc, setDoc] = useState<string>('# Hello world! ')
    const handleDocChange = useCallback(newDoc => {
        setDoc(newDoc)
    }, [])
    return ( 
        <div className="app">
            <Editor onChange={handleDocChange} initialDoc={doc}/>
            <Preview doc={doc} />
        </div>
    )
}

export default App