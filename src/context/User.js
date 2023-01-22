import React from "react";

function User() {
    function UserProvider({ children }) {
        const currentUser = {
          name: "Duane",
          interests: ["Coding", "Biking", "Words ending in 'ing'"],
        };
        return (
          <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
        );
      }
}