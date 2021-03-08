import React, { useState, useEffect } from 'react';
import './App.css';
import jdata from './MOCK_DATA.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './Card';
import ReactPaginate from 'react-paginate';

function App() {
  const [data, setData] = useState(jdata.slice(0, 99));
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 5;
  const pagesvisited = pageNumber * userPerPage; //Num og pages

  const displayUsers = data
    .slice(pagesvisited, pagesvisited + userPerPage)
    .map((data) => {
      return (
        <div className='row mt-4 row justify-content-center'>
          <div className='col-lg-4 col-sm-12 mb-4'>
            <Card data={data} />
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(data.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className='container'>
      <div className=''>
        <div className='col-md-12'>
          {displayUsers}
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName='page pagination  navigation justify-content-center'
            previousClassName='page-item page-link  '
            nextClassName='page-item page-link '
            activeClassName='pagination-active'
            disabledClassName='page-item disabled '
            pageClassName=' page-item page-link '
          />
        </div>
      </div>
    </div>
  );
}

export default App;
