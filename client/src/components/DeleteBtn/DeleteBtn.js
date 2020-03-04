import React from 'react';
export function DeleteBtn ({ children, id, onClick}){
    return(
        <button className="button delete"
                type="button"
                id={id}
                onClick>
                    {children}
                </button>
    );
};