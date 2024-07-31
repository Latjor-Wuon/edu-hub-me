import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userProgress, setUserProgress] = useState({
        coursesCompleted: 0,
        scholarshipsApplied: 0,
        workshopsAttended: 0,
    });

    return (
        <UserContext.Provider value={{ userProgress, setUserProgress }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
