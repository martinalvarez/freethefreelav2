import {
  Box,
  Flex,  
  Heading, 
  Divider,
  Progress,
  Text,
  Stack
} from '@chakra-ui/react';
import CustomToolTip from './CustomTooltip';
import { fetchBusinessHealth } from '../../data/dataTransform';
import { formatPercentage } from '../../utils/helpers';
import Error from '../common/Error';
import Loading from '../common/Loading';
import useFetch from '../../hooks/useFetch';

function BusinessHealthInner() {
    const [businessHealth, loading, error] = useFetch(fetchBusinessHealth);

    if (loading) {
      return <Loading />;
    }
  
    if (error || !businessHealth) {
      return <Error />;
    }

    const { creditScore, elegibity, monthlyProfit, monthlyRevenue } = businessHealth;
    const fundings = [
      {
        id: 1,
        tooltip: 'Credit score...',
        title: `Your credit score is below ${creditScore}.`,
        text: `Lenders usually require a score over ${creditScore}`,
      },
      {
        id: 2,
        tooltip: 'Monthly profit...',
        title: `You haven't reachead profitability yet.`,
        text: `Your current monthly profit is ${monthlyProfit}`,
      },
      {
        id: 3,
        tooltip: 'Monthly revenue...',
        title: `You haven't reachead profitability yet.`,
        text: `Loans usually require over ${monthlyRevenue} monthly revenue`,
      },      
    ];   

    return(
      <>
          <Box>
            <Heading as="h2" className="heading">
              YOUR GOAL
            </Heading>                 

            <Text fontSize='sm'>To secure a loan for</Text>      
          </Box>
          
          <Box>
              <Flex justify="space-between" alignItems="center">
                <Box>
                  <Text fontSize='sm'>ELIGIBILITY FOR LOANS</Text>
                </Box>

                <Box>
                  <Text fontSize='sm'>{formatPercentage(elegibity)}</Text>
                </Box>
            </Flex>    

            <Progress 
              colorScheme='green' 
              value={elegibity}
              borderRadius="full"
            />           
          </Box>

          <Box>
            <Divider />              
          </Box>

          <Box>
            <Heading as="h2" className="heading">
              FACTORS ABOUT YOUR FUNDING READINESS:
            </Heading>
         
            {
              fundings.map(({ id, text, title, tooltip })=> {
                return (
                    <CustomToolTip key={id} label={tooltip}>
                      <>
                        <Text fontSize='md' fontWeight="bold">{title}</Text>
                        <Text fontSize='xs'>{text}</Text>
                      </>
                    </CustomToolTip>
                  );
              })
            }
          </Box>    
      </>
    );
}

function BusinessHealth() {
  return (
    <Box className="box">
      <Stack spacing="3">
        <Box>
          <Heading as="h1" className="heading">
            Your Business Health
          </Heading>    
        </Box>
        
        <Box>
          <Divider />              
        </Box>

        <BusinessHealthInner />
      </Stack>
    </Box>    
  );
}

export default BusinessHealth;