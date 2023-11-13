import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
      global: {
        'h1.heading': {
          fontSize: 'xl',
          fontWeight: 'bold',
        },
        'h2.heading': {
          fontSize: 'sm',
        },      
        '.box': {
          bg: 'white',
          border: '1px solid',
          borderColor: 'gray.200',
          borderRadius: 'md',          
          boxShadow: 'md',
          height: '100%',
          m: 2,
          p: 4,
        },      
      },
    },
  });

  export default theme;