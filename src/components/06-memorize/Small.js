import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log('Me renderize otra vez :(');
    return (
        
        <small>{value}</small>
    )
});
