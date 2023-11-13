
import {
    Brush,
    CartesianGrid,    
    Legend,    
    Line,
    LineChart,
    Tooltip,    
    XAxis,
    YAxis
} from 'recharts';                         
import {
  Box, 
  Heading, 
  Flex, 
  Tooltip as ChakraTooltip 
} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { AnnualizedRevenue } from '../../types/AnnualizedRevenue';
import { fetchAnnualizedRevenue } from '../../data/dataTransform';
import useFetch from '../../hooks/useFetch';

function RevenueChart({ data }: { data: AnnualizedRevenue[] | null}) {
  const tooltipLines = [
    "This shows approximate monthly revenue goals to hit annualized growth rates,",
    "based on your growth from last year's monthly revenue and your most recent",
    "3-month average revenue."
  ];

  const tooltipLabel = tooltipLines.join(" ");

  return (
      <Flex justifyContent="center" p={4}>
        <LineChart
          data={data || undefined}
          height={250}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          width={730}          
        >
            <CartesianGrid strokeDasharray="3 3" />
            <Brush dataKey="name" height={30} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Line name="Current Growth" type="monotone" dataKey="growth" stroke="#82ca9d" />                
            <Line name="Current Growth +10%" type="monotone" dataKey="growth10" stroke="#8884d8" />
            <Line name="Current Growth +20%" type="monotone" dataKey="growth20" stroke="#000000" />
        </LineChart>

        <ChakraTooltip label={tooltipLabel} aria-label='A tooltip' placement='left-start'>
          <QuestionOutlineIcon />
        </ChakraTooltip>        
      </Flex>   
  );
}

function AnnualizedRevenueInner() {
  const [data, loading, error] = useFetch(fetchAnnualizedRevenue);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (data?.length === 0) {
      return <div>Nothing here yet.</div>;
  }      

  return <RevenueChart data={data}/>
}

function AnnualizedRevenueProjection() {
  return (
    <Box className="box">
      <Heading as="h1" className="heading">
        Annualized Revenue Projection
      </Heading>    

      <AnnualizedRevenueInner />
    </Box>
  );
}

export default AnnualizedRevenueProjection;