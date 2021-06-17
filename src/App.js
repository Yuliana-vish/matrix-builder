//import { Component } from 'react';
import Form from './Components/Form';
import TableMatrix from './Components/TableMatrix';
import './App.css';
//import GetRandomMatrix from './Components/TableMatrix/GetRandomMatrix';
import { useState } from 'react';

const App = () => {
  const [matrix, setMatrix] = useState();

  const onHandleSubmit = event => {
    //console.log(event)
    setMatrix(event);
  };

  return (
    <>
      <section className="/">
        <Form onSubmit={onHandleSubmit} />
      </section>
      <section className="/">
        {matrix && <TableMatrix matrix={matrix} />}
      </section>
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     columns: '',
//     rows: '',
//     cells: '',
//   };

//   submitForm = data => {
//     this.setState(data);
//     console.log(data);
//   };

//   render() {
//     return (
//       <>
//         <section className="/">
//           <Form
//             onSubmit={this.submitForm}
//             state={this.state}
//             resetState={this.setState}
//           />
//         </section>
//         <section className="/">
//           {/* <GetRandomMatrix {...this.state} /> */}
//           <Table />
//         </section>
//       </>
//     );
//   }
// }
