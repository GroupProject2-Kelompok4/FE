import React from "react";

interface AddedLogProps {
  status: string;
  menteeId: string;
  date: string;
  feedback: string;
}

const AddedLog: React.FC<AddedLogProps> = ({ status, menteeId, date, feedback }) => {
  return (
    <div className="card bg-white p-4 rounded border border-gray-300 shadow-lg mb-4 mx-8 flex flex-row gap-x-28">
      <div className="card-body">
        <h3>{status}</h3>
        <p>{menteeId}</p>
        <p>{date}</p>
      </div>
      <div className="card-body">
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default AddedLog;
