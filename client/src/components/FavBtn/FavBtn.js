
import React from "react";


export function FavBtn ({
    children, onClick, id, title, author, synopsis, image, link
}) {
    return(
    <button
        className="button save"
        type="button"
        id={id}
        onClick={onClick}
        data-title={title}
        data-author={author}
        data-synopsis={synopsis}
        data-image={image}
        data-link={link}>
            {children}
        </button>
    )};

