import React from 'react';

export const Forms = ({text,addText,handleChange}) => {
    return (
        <div className="forms">
            <div className="form">
                <input type="text" value={text} onChange={(e)=>handleChange(e)}/>
                <button onClick={addText}>Добавить</button>
            </div>
        </div>

    );
}
