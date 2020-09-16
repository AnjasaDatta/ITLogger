import React from 'react';
import { deleteTechs } from '../actions/techActions';
import { connect } from 'react-redux';

const TechItem = ({ tech, deleteTechs }) => {
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content'>
          <i
            className='material-icons grey-text'
            onClick={() => {
              deleteTechs(tech.id);
            }}
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTechs })(TechItem);
