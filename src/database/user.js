import { useEffect } from "react";

export const fetchUserByUsernameAndPassword = (username, password) => {
    try {
      const allUsersString = localStorage.getItem("users");
      const allUsers = JSON.parse(allUsersString);
  
      return (
        allUsers.find(
          (user) => user.username === username && user.password === password
        ) || null
      );
    } catch {
      return null;
    }
  };
  
  export const saveUserOnRegister = (userDetails) => {
    try {
  
      const allUsersString = localStorage.getItem("users");
      const allUsers = JSON.parse(allUsersString || "[]");
      const user = allUsers.find((u) => u.username === userDetails.username);
      if (user) {
        return "User with this username already exists";
      }
      
  
      allUsers.push({
        ...userDetails,
        token: userDetails.username,
      });
  
      localStorage.setItem("users", JSON.stringify(allUsers));
      
  
      return true;
    } catch(err) {
      return 'Sometheing went wrong'
    }
  };

  