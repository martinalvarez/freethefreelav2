import { 
  Tab,   
  Tabs, 
  TabList, 
  TabPanel,  
  TabPanels,
  Box
} from '@chakra-ui/react'
import Debt from './Debt';
import Payments from './Payments';

function DebtAndPayments() {
    return(
      <Box className="box">
          <Tabs variant='soft-rounded' colorScheme='red'>
            <TabList>
                <Tab>Debt</Tab>

                <Tab>Payments</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                  <Debt />
                </TabPanel>

                <TabPanel>
                  <Payments />
                </TabPanel>
            </TabPanels>
        </Tabs>
      </Box>
    );
}

export default DebtAndPayments;