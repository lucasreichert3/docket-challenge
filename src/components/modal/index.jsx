import React from 'react'
import './style.scss'

function Modal({ showModal = false, modalCloseCallback, children, headerElement }) {
  return (
    <>
      {showModal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              {headerElement}
              <span className="close" onClick={modalCloseCallback}>
                &times;
              </span>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
