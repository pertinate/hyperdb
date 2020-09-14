import React from 'react';

interface Props {
    history: ({ sqlName: string, sql: string; })[];
    setSqlHistoryIndex: (index: number) => void;
    closeSql: () => void;
}

function SQLTabs(props: Props) {
    const { } = props;

    return (
        <div
            style={{ overflowX: 'auto', display: 'flex', flexWrap: 'nowrap' }}
        >
            <ul>
                {
                    props.history?.map((history, index) => {
                        return (
                            <li
                                onClick={() => props.setSqlHistoryIndex(index)}
                                style={{
                                    display: 'flex'
                                }}
                            >
                                <span
                                    style={{ marginRight: '16px' }}
                                >{history.sqlName}</span>
                                <div
                                    onClick={() => props.closeSql()}
                                >
                                    X
                                </div>
                                {/* <span
                                    className='close'
                                    onClick={() => props.closeSql()}
                                >x</span> */}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default SQLTabs;
