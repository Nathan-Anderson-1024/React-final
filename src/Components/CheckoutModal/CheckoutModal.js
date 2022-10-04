import React from 'react'
import './CheckoutModal.css'
import {ReactComponent as Logo} from './loading.svg'
export default function CheckoutModal({ show, onClose}) {

  if (!show) {
    return null;
  }

  return (
    <div className='modal' onClick={onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <h4 className='modal-title'>Checking Out</h4>
          </div>
          <div className='modal-body'>
            <Logo />
            <p>Submitting your order!</p>
          </div>
          <div className='modal-footer'>
          </div>
        </div>
    </div>
  )
}
