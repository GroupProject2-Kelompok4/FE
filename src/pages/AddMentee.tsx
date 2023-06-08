import React, { useState } from "react";
import { LoggedInNavbar } from "../components/LoggedInNavbar";
import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import { GenderInput } from "../components/Input";
import { DropdownInput } from "../components/Input";
import { EducationInput } from "../components/Input";
import { PrimButton } from "../components/Button";
import { SecButton } from "../components/Button";

const AddMentee: React.FC = () => {
  const [gender, setGender] = useState("");
  const [academic, setAcademic] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAcademicChange = (event) => {
    setAcademic(event.target.value);
  };
  return (
    <div>
      <LoggedInNavbar imageSrc="" />
      <div className="mt-8 ml-8">
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-20">Name</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Full Name" />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-20">Address</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Address" />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-20">Email</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Address" />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl w-20 mr-36">Gender</div>
          <GenderInput value={gender} onChange={handleGenderChange} />
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-20">Telegram</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Telegram ID" />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-20">Phone</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Phone Number" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-3 font-bold">Emergency Data</h1>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-20">Name</div>
            <div className="w-3/4 ml-36">
              <Input placeholder="Full Name" />
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-20">Phone</div>
            <div className="w-3/4 ml-36">
              <Input placeholder="Phone Number" />
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-20">Status</div>
            <div className="w-3/4 ml-36">
              <DropdownInput>
                <option>Status...</option>
                <option value="option1">Ayah</option>
                <option value="option2">Ibu</option>
                <option value="option3">Kakak</option>
                <option value="option3">Adik</option>
              </DropdownInput>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-3 font-bold">Education Data</h1>
          <div className="flex flex-row mb-3">
            <div className="text-xl w-20 mr-36">Gender</div>
            <EducationInput value={academic} onChange={handleAcademicChange} />
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-20">Major</div>
            <div className="w-3/4 ml-36">
              <Input placeholder="Major" />
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-20">Graduate</div>
            <div className="w-3/4 ml-36">
              <Input placeholder="University Name" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-24 mb-8 mt-8">
        <div className="flex space-x-5 mr-2">
          <div className="w-40">
            <PrimButton label="Save" />
          </div>
          <div className="w-40">
            <SecButton label="Cancel" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddMentee;
