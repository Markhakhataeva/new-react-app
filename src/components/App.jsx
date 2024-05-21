import React from 'react';
import {Header} from "./Header";
import {Forms} from "./Forms";
import {Todos} from "./Todos";

export const App = () => {

    const[text, setText] = React.useState("");
    const [todos, setTodos] = React.useState([]);

    const[checked, setChecked] = React.useState(false);

    const handleChecked = () => {
        setChecked(!checked);
    }

    const handleChange = (e) => {setText(e.target.value);};

    const addText = () => {
        setTodos([...todos,
            text
        ])
        setText("")

    }
  return (
    <div className="App">
        <Header />
        <Forms text={text}   addText={addText} handleChange={handleChange} />
        <Todos  checked={checked} handleChecked={handleChecked} todos={todos}  />
    </div>
  );
}
