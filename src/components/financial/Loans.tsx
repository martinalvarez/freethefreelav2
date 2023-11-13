import { 
    Table,
    TableContainer,    
    Td,   
    Th,    
    Thead,
    Tbody,
    Tr
} from '@chakra-ui/react';
import { fetchLoans } from '../../data/dataTransform';
import Error from '../common/Error';
import Loading from '../common/Loading';
import useFetch from '../../hooks/useFetch';

function Loans() {
    const [loans, loading, error] = useFetch(fetchLoans);

    if (loading) {
        return <Loading />;
      }
    
    if (error) {
        return <Error />;
    }

    if (loans?.length === 0) {
        return <div>Nothing here yet.</div>;
    }    

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Type</Th>
                        <Th>Monthly Payment</Th>
                        <Th>Remaining balance</Th>
                        <Th>Payment Date</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {loans?.map((loan)=> {
                        return (
                            <Tr key={loan.id}>
                                <Td>{loan.name}</Td>
                                <Td>{loan.type}</Td>
                                <Td>{loan.monthlyPayment}</Td>
                                <Td>{loan.remainingBalance}</Td>
                                <Td>{loan.paymentDate}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default Loans;