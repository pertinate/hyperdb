import React from 'react';

interface Props {
    dbList: {
        name: string;
        url: string;
    }[];
    activeDb: string;
    setDbIndex: (index: number) => void;
}

function Sider(props: Props) {
    const { } = props;

    return (
        <div
            style={{ display: 'flex', flexDirection: 'row' }}
        >
            <div
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {
                    props.dbList.map((db, index) => {
                        return (
                            <button
                                className='tab-button'
                                onClick={() => {
                                    props.setDbIndex(index);
                                }}
                            >{db.name}</button>
                        );
                    })
                }
            </div>

            <div>
                test
            </div>
        </div>
    );
}

export default Sider;
