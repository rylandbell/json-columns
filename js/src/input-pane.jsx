var React = require('react');
var ResetButton = require('./reset-button.jsx');

//Contains the text input and left 1/3 of the app
module.exports = ({ textContent, handleTextChange, handleFormSubmit, resetState }) => (
  <div className='input-pane'>
    <form action='' onSubmit={handleFormSubmit}>
      <div className='form-group' >
        <textarea className='form-control' rows='15' value={textContent} onChange={handleTextChange} placeholder='Paste a JSON string here (without any surrounding quote marks)...'>
        </textarea>
        <input className='btn btn-primary' id='btn-data-submit' type='submit' value='Go!' />
        <ResetButton resetState={resetState} />
        <div className='clearfix'></div>
      </div>
    </form>
  </div>
);