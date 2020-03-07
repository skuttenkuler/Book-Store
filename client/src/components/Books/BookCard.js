import React from 'react';



export function BookList({children}) {
    return (
        <section className="books-container">
            {children}
        </section>
    );
};



export function Book({children}) {
    return (
        <section className="book">
            {children}
        </section>
    );
};

