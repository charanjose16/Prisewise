import React from 'react';

const Home = () => {
  return (
    <div>
      <div class="input-group ">
        <div class="form-outline">
           <input type="search" id="form1" class="form-control" placeholder='search'/>
        </div>
           <button type="button" class="btn btn-primary search-button">
              <i class="fas fa-search"></i>
           </button>
      </div>
    </div>
  );
};

export default Home;
