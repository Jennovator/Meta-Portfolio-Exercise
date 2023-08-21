import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import { useAlertContext } from "../context/alertContext";
  import { useRef } from "react";
  
  /**
   * This is a global component that uses context to display a global alert message.
   */
  function Alert() {
    // The useAlertContext hook is called to access the properties provided by the alert context
    const { isOpen, type, message, onClose } = useAlertContext();
    // This ref will be used to focus on the cancel button in the AlertDialog for accessibility purposes.
    const cancelRef = useRef(); 
    const isSuccess = type === "success"; // A boolean variable that is calculated based on whether the type is equal to success
  
    // AlertDialog is a built-in Chakra UI component
    // The alert can be of two types: success (green background) or error (orange background) and will display the message in a dialog
    return (
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isSuccess ? 'All good!' : 'Oops!'}
            </AlertDialogHeader>
            <AlertDialogBody>{message}</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  
  export default Alert;
  