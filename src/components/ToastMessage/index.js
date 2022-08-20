import React from 'react';
import './ToastMessage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function ToastMessage() {
    return (
        <div className="contain-toast">
            <div className="toast toast__success">
                <div className="toast__icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div className="toast__body">
                    <h3 className="toast__title">Successfully Add!</h3>
                    <p className="toast__message">
                        "Josefa Queen Size Bed with Storage in Natural Teak Wood Finish" is successfully added.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ToastMessage;
