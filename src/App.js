import './App.css';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let items = [
    <Pagination.Item key='1'>
      1
    </Pagination.Item>,
     <Pagination.Item key='2' active='true'>
      2
    </Pagination.Item>,
    <Pagination.Item key='3'>
      3
    </Pagination.Item>,
  ];
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          PIL <code className='custom-code'>code</code> Challenge
        </p>       
      </header>

      <main className='container'>
        <div className='row mt-4 mb-2 justify-content-between'>
          <div className='col-12 col-md-auto'>
            <h3 className='text-start'>Lista de Productos</h3>
          </div>
          
          <div className='col-12 col-md-auto'>
            <div className="input-group">          
              <input type="text" className="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="basic-addon1" />
              <button type='button' className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
   
        <Table striped bordered hover responsive className='mt-1'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className='text-start'>Veal - Knuckle</td>
              <td>248
                <button type='button' className="btn btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dc3545" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                </svg>
                                </button>
                <button type='button' className="btn btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
                </button>
              </td>
              <td><img alt='ProductImage' src='http://dummyimage.com/126x152.png/dddddd/000000' width='40px'/></td>
            </tr>
            <tr>
              <td>2</td>
              <td className='text-start'>Seabream Whole Farmed</td>
              <td>489
                <button type='button' className="btn btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dc3545" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                  </svg>
                                  </button>
                  <button type='button' className="btn btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                  </svg>
                </button>
              </td>
              <td><img alt='ProductImage' src='http://dummyimage.com/153x247.png/cc0000/ffffff' width='40px'/></td>
            </tr>
            <tr>
              <td>3</td>
              <td className='text-start'>Carbonated Water - Lemon Lime</td>
              <td>384
                <button type='button' className="btn btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dc3545" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                    </svg>
                                    </button>
                    <button type='button' className="btn btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </button>
              </td>
              <td><img alt='ProductImage' src='https://dummyimage.com/208x110.png/dddddd/000000' width='40px'/></td>
            </tr>
          </tbody>
        </Table>

        <div className='row'>
          <div className='col-auto mx-auto'>
            <Pagination>{items}</Pagination>   
          </div>         
        </div>

      </main>


    
    </div>
  );
}

export default App;
