export const fetchUserByEmailAndPassword = (email, password) => {
    try {
      const allUsersString = localStorage.getItem("users");
      const allUsers = JSON.parse(allUsersString);
  
      return (
        allUsers.find(
          (user) => user.email === email && user.password === password
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
      const user = allUsers.find((u) => u.email === userDetails.email);
      if (user) {
        return "User with this email already exists";
      }
      
  
      allUsers.push({
        ...userDetails,
        token: Date.now(),
      });
  
      localStorage.setItem("users", JSON.stringify(allUsers));
  
      return true;
    } catch(err) {
      return 'Sometheing went wrong'
    }
  };
  