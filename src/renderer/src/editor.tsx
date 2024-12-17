import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'
import './editor.scss'

interface Props {
    initialDoc: string,
    onChange: (doc: string) => string
}

const Editor: React.FC<Props> = (props) => {
    const { onChange, initialDoc } = props
    const handleChange = useCallback(
        state => onChange(state.doc.toString()),
        [onChange]
    )
    const[refContainer, editorView] = useCodeMirror<HTMLDivElement>({
        initialDoc: initialDoc,
        onChange: handleChange
    })
    useEffect(() => {
        if (editorView) {
            // do nothing now
        }
    }, [editorView])
    return <div className='editor-wrapper' ref={refContainer}></div>
}

export default Editor