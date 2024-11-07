// DeleteButton.jsx

import React from 'react';

const DeleteButton = ({ onDelete, tourId }) => {
    const handleDelete = () => {
        onDelete(tourId);
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteButton;
