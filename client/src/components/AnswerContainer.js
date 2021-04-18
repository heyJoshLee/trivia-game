import React from 'react';
import jQuery from 'jquery';

class AnswerContainer extends React.Component {
  
  componentDidMount() {
    jQuery("#answer-container").hide();
  }

  render () {
    return (
      <div id="answer-container">
        <div className="modal-bkg">
          <div className="modal">
             <p>Your Answer:</p>
             <p>Correct Answer:</p>
             <p>Points Awarded:</p>
            </div>        
          </div> 
        </div>
    )
  }
 
}

export default AnswerContainer;