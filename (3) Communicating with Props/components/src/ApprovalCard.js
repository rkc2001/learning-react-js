import React from 'react';

const ApprovalCard = (props) => {
  console.log(props);

  return (
    <div className="ui card">
      {/* Comment Detail Component or custom component goes here */}
      <div className="content">{props.children}</div>

      {/* Card styling and buttons go here */}
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
