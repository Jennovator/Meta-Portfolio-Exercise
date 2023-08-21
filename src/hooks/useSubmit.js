import {useState} from "react";

// The wait function is defined using the new Promise syntax. It takes a single argument ms, 
// representing the number of milliseconds to wait before resolving the promise.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false); // A boolean that tracks whether a submission is in progress
  const [response, setResponse] = useState(null); // An object that stores the response data from the simulated API call

  // This function is define to handle the form submission and takes 2 parameters: url and data (representing the form data)
  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true); // set to true to indicate that a submission is in progress

    /* 
     - wait function is called with a delay of 2 seconds that simulates the delay of an API call
     - if the random number is < 0.5 an error is thrown, but if it is > 0.5 the response state is set with a success message
     */
    try {
      await wait(2000); 
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })
    } catch (error) { // If an error is caught, the response state is set with an error message
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false); // set back to false to indicate that the submission process is complete
    }
  };

  return { isLoading, response, submit }; // the hook returns an object with 3 properties
}

export default useSubmit;
