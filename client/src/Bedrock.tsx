import React, { Component, ReactNode } from 'react';
import Header from './components/header';
import Sider from './components/sider';
import Content from './components/content';
import Modal from './components/modal';

interface Props { }
interface State {
    currentActiveDb: string,
    dbList: ({ name: string, url: string; })[],
    dbSqlHistory: ({ name: string, history: ({ sqlName: string, sql: string; })[]; })[];
    databaseIndex: number;
    sqlHistoryIndex: number;
}

class Bedrock extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            databaseIndex: -1,
            sqlHistoryIndex: -1,
            currentActiveDb: 'fsdevdb',
            dbList: [{ name: 'fsdevdb', url: 'fsdevdb-nonprod-5e827834.database.windows.net' }, { name: 'fsdevdb', url: 'fsdevdb-nonprod-5e827834.database.windows.net' }, { name: 'fsdevdb', url: 'fsdevdb-nonprod-5e827834.database.windows.net' }],
            dbSqlHistory: [
                {
                    name: 'fsdevdb',
                    history: []
                }
            ]
        };
    }



    render(): ReactNode {
        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#110F18'
                }}
            >
                {/* <Modal state={true}>
                    test
                </Modal> */}
                <Header
                    createNewSql={() => {
                        let dbSql = [...this.state.dbSqlHistory];
                        dbSql[this.state.databaseIndex].history.push({ sqlName: 'new sql', sql: '' });
                        this.setState({ dbSqlHistory: dbSql });
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        flex: 300,
                    }}
                >
                    <Sider
                        dbList={this.state.dbList}
                        activeDb={this.state.currentActiveDb}
                        setDbIndex={(index) => {
                            let dbSqlHistory = [...this.state.dbSqlHistory];
                            if (dbSqlHistory[index].history.length === 0) {
                                dbSqlHistory[index]?.history.push({ sqlName: 'new sql', sql: '' });
                            }
                            this.setState({ databaseIndex: index, dbSqlHistory });
                        }}
                    />
                    <Content
                        dbSqlHistory={this.state.dbSqlHistory}
                        setDbSql={dbSqlHistory => {
                            this.setState({ dbSqlHistory });
                        }}
                        setSqlHistoryIndex={index => {
                            this.setState({ sqlHistoryIndex: index });
                        }}
                        sqlHistoryIndex={this.state.sqlHistoryIndex}
                        databaseIndex={this.state.databaseIndex}
                    />
                </div>
            </div>
            // <Frame {...this.state} setDbSql={dbSqlHistory => this.setState({ dbSqlHistory })} />
        );
    }
}

export default Bedrock;
