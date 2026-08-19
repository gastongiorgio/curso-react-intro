import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador</p>
                    <p>¿Quieres sincronizar tu TODOs?</p>
                    <button
                        className= "ChangeAlert-button ChangeAlert-button--add"
                        onClick={toggleShow}
                    >
                        Si, sincronizar información
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };