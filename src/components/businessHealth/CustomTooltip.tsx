import React, { forwardRef, ReactNode, Ref } from 'react';
import { Box, Tooltip } from '@chakra-ui/react';

interface CustomCardProps {
    children: ReactNode;
}

const CustomCard = forwardRef(({ children, ...rest }: CustomCardProps, ref: Ref<HTMLDivElement>) => (
    <Box
        background='gray.50'
        borderRadius="md"
        m={1}
        p={3}
        ref={ref} {...rest}
    >
        {children}
    </Box>
));

function CustomToolTip({ children, label}: { children: ReactNode; label: string} ) {
    return(
        <Tooltip label={label} placement='left-start'>
            <CustomCard>{children}</CustomCard>
        </Tooltip>        
    );   
}

export default CustomToolTip;