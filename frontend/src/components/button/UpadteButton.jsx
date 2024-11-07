// UpdateButton.jsx

import React from 'react';

const UpdateButton = ({ onUpdate, tourId }) => {
    const handleUpdate = () => {
        onUpdate(tourId);
    };

    return (
        <button onClick={handleUpdate}>Update</button>
    );
};

export default UpdateButton;
