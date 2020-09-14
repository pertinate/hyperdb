import React from 'react';

interface Props {
    createNewSql: () => void;
}

function Header(props: Props) {
    const { } = props;

    return (
        <div style={{ width: '100%', flexGrow: 1 }}>
            <button
                className='tab-button'
            >New Connection</button>
            <button
                className='tab-button'
                onClick={() => props.createNewSql()}
            >New SQL</button>
            <button
                className='tab-button'
            >History</button>
        </div>
    );
}

export default Header;
