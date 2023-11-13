import { Divider, Box } from '@chakra-ui/react'
import { fetchPayments } from '../../data/dataTransform';
import Error from '../common/Error';
import Loading from '../common/Loading';
import useFetch from '../../hooks/useFetch';

function Payments() {
    const [payments, loading, error] = useFetch(fetchPayments);

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
            Total Minimum Monthly Payment

            <Divider />

            {payments}
      </Box>    
    );
}

export default Payments;