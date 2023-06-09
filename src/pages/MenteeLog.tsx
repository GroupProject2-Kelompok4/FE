import { FC, useState } from "react";
import { LoggedInNavbar } from "../components/LoggedInNavbar";
import { Footer } from "../components/Footer";
import Profile from "../components/Profile";
import NewLogModal from "../components/ModalMenteeLog";
import AddedLog from "../components/AddedLog";

const MenteeLog: FC = () => {
  const [logs, setLogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddLog = (logData) => {
    setLogs([...logs, logData]);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <LoggedInNavbar imageSrc="" />
      <Profile
        id="users"
        fullName="Rahman Kamil"
        classes="Quality Engineer Batch 8"
        prevSchool="SMA Negeri 123"
        phoneNum={123456789}
        telegram="@rahmankamil"
        discord="@rahmankamil"
        email="rahmankamil@gmail.com"
      />
      <div>
        <button
          type="button"
          className="py-3 px-4 h-8 ml-8 mb-8 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-@19345E text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={handleOpenModal}
        >
          Add New Log
        </button>
      </div>
      {showModal && (
        <NewLogModal onClose={handleCloseModal} onAddLog={handleAddLog} />
      )}
      {logs.map((log, index) => (
        <AddedLog
          key={index}
          status={log.status}
          menteeId={log.menteeId}
          date={log.date}
          feedback={log.feedback}
        />
      ))}
      <Footer />
    </div>
  );
};
export default MenteeLog;
