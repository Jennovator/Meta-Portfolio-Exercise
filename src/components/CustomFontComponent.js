import React from 'react';

// This is a custom hook that encapsulates the logic for the custom font style object
// It will not render anything, but it can be used by other components to obtain the styles
const useCustomFontStyle = () => {
  const customFontStyle = {
    fontFamily: 'Karla, serif',
    fontWeight: 'light'
  };

  return customFontStyle;
};

export default useCustomFontStyle;

