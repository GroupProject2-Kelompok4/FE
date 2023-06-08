import React, { useRef, useEffect, useState } from "react";

interface NewLogModalProps {
  onClose: () => void;
  onAddLog: (logData: any) => void;
}

const NewLogModal: React.FC<NewLogModalProps> = ({ onClose, onAddLog }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedMentee, setSelectedMentee] = useState<string>("");

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const handleMenteeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMentee(event.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-4 rounded" ref={modalRef}>
        <span className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-lg font-bold mb-4">New Log</h2>
        <div className="w-96">
          <label htmlFor="logInput" className="block mb-2 font-semibold">
            Status
          </label>
          <select
            id="logInput"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="">Select...</option>
            <option value="Active">Active</option>
            <option value="Non-Active">Non-Active</option>
          </select>
          <label htmlFor="menteeInput" className="block mt-4 font-semibold">
            Mentee
          </label>
          <select
            id="menteeInput"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            value={selectedMentee}
            onChange={handleMenteeChange}
          >
            <option value="">Select...</option>
            <option value="Mentee1">Mentee 1</option>
            <option value="Mentee2">Mentee 2</option>
            <option value="Mentee3">Mentee 3</option>
          </select>
          <label htmlFor="feedbackInput" className="block mt-4 font-semibold">
            Feedback:
          </label>
          <textarea
            id="feedbackInput"
            className="w-full h-20 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 resize-none"
            placeholder="Enter your feedback"
          ></textarea>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => {
            const feedback = document.getElementById("feedbackInput") as HTMLTextAreaElement;
            const feedbackValue = feedback.value;

            const logData = {
              status: selectedStatus,
              menteeId: selectedMentee,
              date: new Date().toLocaleDateString(),
              feedback: feedbackValue,
            };

            onAddLog(logData);
            onClose();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewLogModal;
