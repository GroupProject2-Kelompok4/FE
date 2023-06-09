import React, { useState, useEffect } from "react";
import { LoggedInNavbar } from "../components/LoggedInNavbar";
import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import { GenderInput } from "../components/Input";
import { DropdownInput } from "../components/Input";
import { EducationInput } from "../components/Input";
import { PrimButton } from "../components/Button";
import { SecButton } from "../components/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChangeEvent } from "react";
import axios from "axios";

const AddMentee: React.FC = () => {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [telegram, setTelegram] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [emergencyStatus, setEmergencyStatus] = useState("");
  const [educationType, setEducationType] = useState("");
  const [major, setMajor] = useState("");
  const [graduateDate, setGraduateDate] = useState("");
  const [institution, setInstitution] = useState("");
  const [status, setStatus] = useState("");
  const [classes, setClasses] = useState("");
  const [user, setUser] = useState("");

  const [classesOptions, setClassesOptions] = useState([]);
  const [mentorOptions, setMentorOptions] = useState([]);

  const fetchClassesOptions = () => {
    axios
      .get("https://peterzalai.biz.id/classes", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2ODYyNzY2NjIsImlkIjoiM2QyMzBkMGEtMDM3Ny0xMWVlLWI2ZjQtMDI0MmFjMTEwMDAyIiwicm9sZSI6ImFkbWluIn0.-PtLA3OrwoTTU8Pc-mpBsSEPKQ9tzFrzzNTUsENAlWE",
        },
      })
      .then((response) => {
        setClassesOptions(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchMentorOptions = () => {
    axios
      .get("https://peterzalai.biz.id/users", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2ODYyNzY2NjIsImlkIjoiM2QyMzBkMGEtMDM3Ny0xMWVlLWI2ZjQtMDI0MmFjMTEwMDAyIiwicm9sZSI6ImFkbWluIn0.-PtLA3OrwoTTU8Pc-mpBsSEPKQ9tzFrzzNTUsENAlWE",
        },
      })
      .then((response) => {
        setMentorOptions(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchClassesOptions();
    fetchMentorOptions();
  }, []);

  const handleSave = () => {
    if (
      !name ||
      !nickname ||
      !currentAddress ||
      !homeAddress ||
      !email ||
      !gender ||
      !telegram ||
      !phone ||
      !emergencyName ||
      !emergencyPhone ||
      !emergencyStatus ||
      !educationType ||
      !major ||
      !graduateDate ||
      !institution ||
      !status ||
      !classes ||
      !user
    ) {
      toast.error("Please fill in all required fields.", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
      });
      return; // Exit the function if any required field is empty
    }
    const data = {
      full_name: name,
      nickname: nickname,
      current_address: currentAddress,
      home_address: homeAddress,
      email: email,
      gender: gender,
      telegram: telegram,
      phone: phone,
      emergency_name: emergencyName,
      emergency_phone: emergencyPhone,
      emergency_status: emergencyStatus,
      education_type: educationType,
      major: major,
      graduate_date: graduateDate,
      status: status,
      class_id: classes,
      user_id: user,
      institution: institution,
    };

    axios
      .post("https://peterzalai.biz.id/mentees", data, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2ODYyNTUwNDEsImlkIjoiM2QyMzBkMGEtMDM3Ny0xMWVlLWI2ZjQtMDI0MmFjMTEwMDAyIiwicm9sZSI6ImFkbWluIn0.l4YphziqfXS4sg70vkt28y9dCpUnJj9NtCfCG_zQSJk",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    toast.success("Data saved successfully!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000, // Optional: Duration in milliseconds after which the toast automatically closes
    });
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleNickNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickName(event.target.value);
  };

  const handleCurrentAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentAddress(event.target.value);
  };
  const handleHomeAddresChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHomeAddress(event.target.value);
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleTelegramChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTelegram(event.target.value);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleEmergencyNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmergencyName(event.target.value);
  };

  const handleEmergencyPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmergencyPhone(event.target.value);
  };

  const handleEmergencyStatusChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setEmergencyStatus(event.target.value);
  };

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleEducationTypecChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEducationType(event.target.value);
  };

  const handleMajorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMajor(event.target.value);
  };

  const handleGraduateDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGraduateDate(event.target.value);
  };

  const handleInstitutionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInstitution(event.target.value);
  };

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleClassesChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setClasses(event.target.value);
  };

  const handleUserChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUser(event.target.value);
  };
  return (
    <div>
      <ToastContainer />
      <LoggedInNavbar imageSrc="" />
      <div className="mt-8 ml-8">
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-36">Name</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Full Name" onChange={handleNameChange} />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-36">Nick Name</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="NickName" onChange={handleNickNameChange} />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-36">Current Address</div>
          <div className="w-3/4 ml-36">
            <Input
              placeholder="Current Address"
              onChange={handleCurrentAddressChange}
            />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-36">Home Address</div>
          <div className="w-3/4 ml-36">
            <Input
              placeholder="Home Address"
              onChange={handleHomeAddresChange}
            />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-36">Email</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Email" onChange={handleEmailChange} />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl w-36 mr-36">Gender</div>
          <GenderInput value={gender} onChange={handleGenderChange} />
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-36">Telegram</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Telegram ID" onChange={handleTelegramChange} />
          </div>
        </div>
        <div className="flex flex-row mb-3">
          <div className="text-xl mt-1 w-36">Phone</div>
          <div className="w-3/4 ml-36">
            <Input placeholder="Phone Number" onChange={handlePhoneChange} />
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-3 font-bold">Emergency Data</h1>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Name</div>
            <div className="w-3/4 ml-36">
              <Input
                placeholder="Full Name"
                onChange={handleEmergencyNameChange}
              />
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Phone</div>
            <div className="w-3/4 ml-36">
              <Input
                placeholder="Phone Number"
                onChange={handleEmergencyPhoneChange}
              />
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Status</div>
            <div className="w-3/4 ml-36">
              <DropdownInput
                value={emergencyStatus}
                onChange={handleEmergencyStatusChange}
              >
                <option>Status...</option>
                <option value="Ayah">Ayah</option>
                <option value="Ibu">Ibu</option>
                <option value="Kakak">Kakak</option>
                <option value="Adik">Adik</option>
              </DropdownInput>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-3 font-bold">Education Data</h1>
          <div className="flex flex-row mb-3">
            <div className="text-xl w-36 mr-36">Education</div>
            <EducationInput
              value={educationType}
              onChange={handleEducationTypecChange}
            />
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Major</div>
            <div className="w-3/4 ml-36">
              <Input placeholder="Major" onChange={handleMajorChange} />
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Institution</div>
            <div className="w-3/4 ml-36">
              <Input
                placeholder="Univesity Name"
                onChange={handleInstitutionChange}
              />
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Graduate</div>
            <div className="w-3/4 ml-36">
              <Input
                placeholder="2022-01-01"
                onChange={handleGraduateDateChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl mb-3 font-bold">Bootcamp Class</h1>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Classes</div>
            <div className="w-3/4 ml-36">
              <DropdownInput value={classes} onChange={handleClassesChange}>
                <option>Class...</option>
                {classesOptions.map((option: any) => (
                  <option key={option.class_id} value={option.class_id}>
                    {option.name}
                  </option>
                ))}
              </DropdownInput>
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Mentor</div>
            <div className="w-3/4 ml-36">
              <DropdownInput value={user} onChange={handleUserChange}>
                <option>Mentor...</option>
                {mentorOptions
                  .filter((option: any) => option.team === "mentor")
                  .map((option: any) => (
                    <option key={option.user_id} value={option.user_id}>
                      {option.fullname}
                    </option>
                  ))}
              </DropdownInput>
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <div className="text-xl mt-1 w-36">Status</div>
            <div className="w-3/4 ml-36">
              <DropdownInput value={status} onChange={handleStatusChange}>
                <option>Status...</option>
                <option value="Active">Active</option>
                <option value="Non-Active">Non-Active</option>
              </DropdownInput>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-24 mb-8 mt-8">
        <div className="flex space-x-5 mr-2">
          <div className="w-40 text-lg font-bold">
            <PrimButton label="Save" onClick={handleSave} />
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
