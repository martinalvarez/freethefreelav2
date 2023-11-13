import { 
    Box,
    Flex,
    Grid
} from '@chakra-ui/react';
import AnnualizedRevenue from '../chart/AnnualizedRevenue';
import BusinessHealth from '../businessHealth/BusinessHealth';
import DebtAndPayments from '../debPayments/DebtAndPayments';
import FinancialOverview from '../financial/FinancialOverview';
import User from '../user/User';

function Dashboard() {
    return (
        <Grid
            gap={4}
            mx="auto"
            p={4}
            templateColumns="1fr"
            templateRows="auto auto 1fr"
        >
            <Flex
                align="center"
                justify="center"
                p={4}
                w="100%"
            >
                <User />
            </Flex>

            <Flex
                alignItems="stretch"
                direction={{ base: "column", md: "row" }} 
                justify="space-around" 
                p={4}
                w="100%"
            >
                <Box mb={{ base: 4, md: 0 }} w="100%">
                    <AnnualizedRevenue />
                </Box>

                <Box mb={{ base: 4, md: 0 }} w="100%">
                    <DebtAndPayments />
                </Box>

                <Box mb={{ base: 4, md: 0 }} w="100%">
                    <BusinessHealth />
                </Box>
            </Flex>

            <Flex direction="column" w="100%" p={4}>
                <FinancialOverview />
            </Flex>
        </Grid>
    );
}

export default Dashboard;
