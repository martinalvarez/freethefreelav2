import {
    Box,
    Tab,
    TabList,    
    TabPanel,
    TabPanels,
    Tabs
} from '@chakra-ui/react';
import BanksAccounts from './BanksAccounts';
import CreditCards from './CreditCards';
import Loans from './Loans';

function FinancialOverview() {
    return(
        <Box className="box">
            <Tabs isLazy variant='soft-rounded' colorScheme='red'>
                <TabList>
                    <Tab>Bank Accounts</Tab>
                    <Tab>Credit Cards</Tab>
                    <Tab>Loans</Tab>
                </TabList>
                
                <TabPanels>
                    <TabPanel>
                        <BanksAccounts />
                    </TabPanel>

                    <TabPanel>
                        <CreditCards />
                    </TabPanel>

                    <TabPanel>
                        <Loans />
                    </TabPanel>
                </TabPanels>
            </Tabs>    
        </Box>
    );
}

export default FinancialOverview;

