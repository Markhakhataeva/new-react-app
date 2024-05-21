import React from 'react';

export const Todos = ({checked,handleChecked,todos}) => {

        return (
        <div className="todos">
            <div className="todo">
                <ul>
                    {
                        todos.map((todo) => (
                            <li>
                                <input type="checkbox"
                                       checked={checked}
                                       onChange={() => handleChecked()}
                                       className="gal"/>
                                {todo}
                            </li>

                        ))
                    }

                </ul>
            </div>

        </div>
        );
}

