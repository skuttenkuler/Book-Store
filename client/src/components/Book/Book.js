import React from 'react';
import './Book.css'
export default function Book({children}){
    return(
            <div className="container book">
               {children}
            </div>
    )
}