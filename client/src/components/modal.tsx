import React, { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    actionContent?: ReactNode;
    titleContent?: ReactNode;
    state: boolean;
    title?: string;
}

function Modal(props: Props) {
    const { } = props;

    return (
        props.state && (
            <div className='modal' id='modal' >
                <div className='modal-title' >
                    {
                        props.titleContent ? props.titleContent : props.title ? props.title : <h2>Title</h2>
                    }
                </div>
                <div className='modal-content' >{props.children}</div>
                <div className='modal-actions' >{
                    props.actionContent ? props.actionContent : (
                        <button>
                            Close
                        </button>
                    )
                }</div>
            </div>
        )
    );
}

export default Modal;
