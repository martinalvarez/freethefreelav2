import { Divider, Box } from '@chakra-ui/react'
import { fetchDebt } from '../../data/dataTransform';
import Error from '../common/Error';
import Loading from '../common/Loading';
import useFetch from '../../hooks/useFetch';

function Debt() {
    const [debt, loading, error] = useFetch(fetchDebt);

    if (loading) {
      return <Loading />;
    }
  
    if (error) {
      return <Error />;
    }

    return(
        <Box
          p={4}
          w='100%'          
        >
            Total Debt

            <Divider />
            
            {debt}
      </Box>
    );
}

export default Debt;