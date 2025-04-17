import React, { useState } from 'react';

const UsersList = ({ users }) => {
  // State to control which set of user information to display
  const [displayInfo, setDisplayInfo] = useState(null); // Default: no data is shown

  // Function to handle button click and change display information
  const handleClick = (infoType) => {
    setDisplayInfo(infoType);
  };

  // Function to get the user information based on the current display type
  const getUserData = (user) => {
    switch (displayInfo) {
      case 'id':
        return <span>{user.id}</span>;
      case 'name':
        return <span>{user.id} - {user.name}</span>;
      case 'contact':
        return <span>{user.id} - {user.name} - {user.contact_number}</span>;
      case 'createdAt':
        return <span>{user.id} - {user.name} - {user.contact_number} - {user.created_at}</span>;
      default:
        return null; // Do not render anything if no button is clicked
    }
  };

  return (
    <div className="space-y-4">
      {/* Buttons to toggle data display */}
      <div className="flex justify-between gap-4 mb-4">
        <button
          onClick={() => handleClick('id')}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-400 transition-all duration-300"
        >
          Show ID
        </button>
        <button
          onClick={() => handleClick('name')}
          className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-400 transition-all duration-300"
        >
          Show ID & Name
        </button>
        <button
          onClick={() => handleClick('contact')}
          className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-400 transition-all duration-300"
        >
          Show ID, Name & Contact
        </button>
        <button
          onClick={() => handleClick('createdAt')}
          className="py-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-400 transition-all duration-300"
        >
          Show Full Details
        </button>
      </div>

      {/* Display Users with animation */}
      <div className="transition-all duration-500 ease-in-out transform hover:scale-105">
        {users.length === 0 ? (
          <p>No Users found</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="p-4 border border-gray-300 rounded-md shadow-md hover:bg-gray-100">
              <p className="text-lg font-semibold">
                {getUserData(user)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UsersList;
