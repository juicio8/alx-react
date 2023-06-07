import React from "react";
export const values = {
  defaultUser: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
  logOut: () => {},
};

export const AppContext = React.createContext(
  values // default value
);
// const AppContext = createContext(null);

// const defaultUser = {
//   email: "",
//   password: "",
//   isLoggedIn: false,
// };
// const AppContextProvider = ({ children }) => {
//   const [user, setUser] = useState(defaultUser);

//   function logOut() {
//     setUser(defaultValues);
//   }
//   return (
//     <AppContext.Provider value={{ user, logOut }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export { AppContext, AppContextProvider };
