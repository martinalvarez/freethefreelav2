import { 
    Table,
    TableContainer,    
    Td,   
    Th,    
    Thead,
    Tbody,
    Tr
} from '@chakra-ui/react';
import { fetchBanksAccounts } from '../../data/dataTransform';
import Error from '../common/Error';
import Loading from '../common/Loading';
import useFetch from '../../hooks/useFetch';

function BanksAccounts() {
    const [banksAccounts, loading, error] = useFetch(fetchBanksAccounts);

    if (loading) {
        return <Loading />;
      }
    
    if (error) {
        return <Error />;
    }

    if (banksAccounts?.length === 0) {
        return <div>Nothing here yet.</div>;
    }    

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal' maxWidth="100%">
                <Thead>
                    <Tr>
                        <Th>Bank Name</Th>
                        <Th>Account</Th>
                        <Th>Current Balance</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {banksAccounts?.map((bankAccount)=> {
                        return (
                            <Tr key={bankAccount.id}>
                                <Td>{bankAccount.name}</Td>
                                <Td>{bankAccount.account}</Td>
                                <Td>{bankAccount.balance}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default BanksAccounts;