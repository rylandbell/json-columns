var React = require('react');
var InputPane = require('./input-pane.jsx');
var ExplorerPane = require('./explorer-pane.jsx');
var ErrorDisplay = require('./error-display.jsx');
var ContentPane = require('./content-pane.jsx');

module.exports = ({ reduxState, handleTextChange, handleBracketCheckboxClick, handleFormSubmit, updatePath, resetState, loadSampleData }) => {
  return (<div className='container container-outer'>
    <div className='row'>
      <h1> JSON Columns </h1>
    </div>
    <div className='row clearfix non-app-text-row'>
      <div className='web-only-row'>
        <p className='non-app-text pull-left'>Don't have any JSON strings handy? <a href='#' onClick={loadSampleData}>Click here</a> to load some sample data.</p>
        <p className='pull-right'>
          <a href='https://www.npmjs.com/package/json-columns' target='_blank'>
            <div className='npm-logo' alt="Install a command-line version on NPM" title="Install a command-line version on NPM" />
          </a>
          <a href='https://github.com/rylandbell/json-columns' target='_blank'>
            <div className='github-logo' alt="View source code on GitHub" title="View source code on GitHub"></div>
          </a>
        </p>
      </div>
    </div>
    <div className='row main-app-row'>
      <div className='col-xs-4'>
        <InputPane reduxState={reduxState} handleTextChange={handleTextChange} handleFormSubmit={handleFormSubmit} resetState={resetState}/>
      </div> 
      <div className='col-xs-8'>
        <ExplorerPane reduxState={reduxState} updatePath= {updatePath} handleBracketCheckboxClick={handleBracketCheckboxClick} />
      </div>  
    </div>
    <div className='row'>
      <ErrorDisplay reduxState={reduxState} />
    </div>
    <div className='row'>
      <ContentPane reduxState={reduxState} />
    </div>
  </div>);
};

