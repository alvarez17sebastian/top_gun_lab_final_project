import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  EmployeesForm from './containers/EmployeesForm';


// import * as serviceWorker from './serviceWorker';
 
ReactDOM.render(<App />, document.getElementById('modal-root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



const root = document.getElementById('root')
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
       
      >
        <div
          style={{
            padding: 20,
            background: '#fff',
            borderRadius: '2px',
            display: 'left',
            margin: '1rem',
            position: 'relative',
          }}
        >
          {this.props.children}
          <hr />
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>,
      modalRoot,
    )
  }
}


class Appi extends React.Component {
  state = {showModal: false}
  handleShowMessageClick = () => this.setState({showModal: true})
  handleCloseModal = () => this.setState({showModal: false})
  render() {
    return (
      
        <div
          style={{
            maxWidth: 100,
            position: 'relative',
            top:'150px'
          }}
         >
         
          <button onClick={this.handleShowMessageClick}>
            Create Employees
          </button>
          {this.state.showModal ? (
            <Modal onClose={this.handleCloseModal}>
              This is the secret modal message!
              <EmployeesForm/>
            </Modal>
          ) : null}
        </div>
     
    )
  }
}

ReactDOM.render(<Appi />,root)