import {createContext, useContext, useState} from "react";

// Used the createContext function from React, initializing it with value undefined and passing it into AlertContext variable
const AlertContext = createContext(undefined);

// Responsible for providing the alert-related state and functions to its descendants via the context
export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    // No alert is currently open
    isOpen: false, 
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  // Return the AlertContext.Provider and wraps its children prop with the alert context value
  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

// The useAlertContext hook is defined. It uses the useContext hook to access the value from the 'AlertContext'.
export const useAlertContext = () => useContext(AlertContext); 
