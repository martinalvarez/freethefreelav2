import { 
    Table,
    TableContainer,    
    Td,    
    Th,    
    Thead,
    Tbody,
    Tr
} from '@chakra-ui/react';
import { fetchCreditCards } from '../../data/dataTransform';
import Error from '../common/Error';
import Loading from '../common/Loading';
import useFetch from '../../hooks/useFetch';

function CreditCards() {
    const [creditCards, loading, error] = useFetch(fetchCreditCards);

    if (loading) {
        return <Loading />;
      }
    
    if (error) {
        return <Error />;
    }

    if (creditCards?.length === 0) {
        return <div>Nothing here yet.</div>;
    }    

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <Thead>
                    <Tr>
                        <Th>Card Name</Th>
                        <Th>Credit Limit</Th>
                        <Th>Current Balance</Th>
                        <Th>Interest Rate</Th>
                        <Th>Minimum Payment</Th>
                        <Th>Payment Date</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {creditCards?.map((creditCard)=> {
                        return (
                            <Tr key={creditCard.id}>
                                <Td>{creditCard.name}</Td>
                                <Td>{creditCard.limit}</Td>
                                <Td>{creditCard.balance}</Td>
                                <Td>{creditCard.interestRate}</Td>
                                <Td>{creditCard.minimumPayment}</Td>
                                <Td>{creditCard.paymentDate}</Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default CreditCards;