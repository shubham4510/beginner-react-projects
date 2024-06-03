import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import {FaMoon,FaSun} from 'react-icons/fa'


const ColorModeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === 'light' ? <FaMoon /> : <FaSun />;
  const text = useColorModeValue('dark','light');
const SwitchIcon = useColorModeValue(FaMoon,FaSun)

  return (
    <IconButton
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      onClick={toggleColorMode}
      pos={'fixed'}
      top={'4'}
      right={'4'}
      icon={icon}
      zIndex={'overlay'}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
