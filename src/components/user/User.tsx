import { Box, Text } from '@chakra-ui/react';
import { fetchUser } from '../../data/dataTransform';
import useFetch from '../../hooks/useFetch';

function User() {
    const [user, loading, error] = useFetch(fetchUser);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error</div>;
    }

    return (
      <Box 
        alignItems="center"
        bg="white"        
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"        
        boxShadow="md"
        display="flex"
        flexDirection="column"
        m={2}
        margin="auto"        
        p={4}
        width="100%"        
        >
          <Text fontSize="xl">Welcome {user}</Text>
      </Box>
    );
}

export default User;