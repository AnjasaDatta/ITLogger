import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  function handleChange(e) {
    searchLogs(e.target.value);
  }
  return (
    <div>
      <nav style={{ marginBottom: '20px' }} className='blue'>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input
                id='search'
                type='search'
                required
                ref={text}
                onChange={handleChange}
              />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default connect(null, { searchLogs })(SearchBar);
