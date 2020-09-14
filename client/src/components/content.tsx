import React from 'react';
import SQLTabs from './SQLTabs';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/sql/sql';

interface Props {
    dbSqlHistory: ({ name: string, history: ({ sqlName: string, sql: string; })[]; })[];
    setDbSql: (dbSql: ({ name: string, history: ({ sqlName: string, sql: string; })[]; })[]) => void;
    sqlHistoryIndex: number;
    databaseIndex: number;
    setSqlHistoryIndex: (index: number) => void;
}

function Content(props: Props) {
    const { } = props;

    return (
        <div
            style={{
                width: '100%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap'
            }}
        >
            <SQLTabs
                history={props.dbSqlHistory[props.databaseIndex]?.history}
                setSqlHistoryIndex={props.setSqlHistoryIndex}
                closeSql={() => {
                    let dbSql = [...props.dbSqlHistory];
                    dbSql[props.databaseIndex].history.splice(props.sqlHistoryIndex, 1);
                    props.setDbSql(dbSql);
                }}
            />
            <div>
                {
                    //sql controls
                    props.dbSqlHistory[props.databaseIndex]?.history && <h1>sql controls</h1>
                }
            </div>
            <div
                style={{ flex: 500 }}
            >
                <CodeMirror
                    value={props.dbSqlHistory[props.databaseIndex]?.history[props.sqlHistoryIndex]?.sql}
                    onBeforeChange={(editor, data, value) => {
                        let dest = [...props.dbSqlHistory];
                        if (props.databaseIndex > -1) {
                            if (props.sqlHistoryIndex > -1) {
                                dest[props.databaseIndex].history[props.sqlHistoryIndex].sql = value;
                            }
                        }
                        props.setDbSql(dest);
                    }}
                    options={{
                        mode: 'text/x-mssql',
                        theme: 'material',
                        lineNumbers: true
                    }}
                />
            </div>
        </div>
    );
}

export default Content;
