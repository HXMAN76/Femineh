import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DocDash = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');
  const [activePatient, setActivePatient] = useState(null);

  const patients = [
    { id: 1, name: 'Priya sharma' },
    { id: 2, name: 'Geeta anjali' },
  ];

  const handlePatientClick = (patientId) => {
    setActivePatient(patientId);
  };

  const handleOptionClick = (option) => {
    if (option === 'thisWeek' || option === 'thisMonth') {
      // Simulating opening a PDF
      window.open('/sample.pdf', '_blank');
    } else {
      // Simulating a summary (you can replace this with actual functionality)
      alert('Chat summary for the selected patient');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-8 px-4">
      {/* Back Button */}
      <div className="w-full max-w-3xl mb-4">
        <button
          onClick={() => navigate('/')}
          className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
        >
          Back to Home
        </button>
      </div>

      {/* Header */}
      <header className="w-full max-w-3xl bg-gray-900 shadow-md rounded-lg p-4 mb-8">
        <h1 className="text-2xl font-bold text-white text-center">Doctor Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-3xl bg-gray-900 shadow-md rounded-lg p-4 space-y-8">
        {/* Tabs */}
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('details')}
            className={`text-white font-bold py-2 px-4 rounded ${
              activeTab === 'details' ? 'bg-gray-700' : 'bg-gray-800'
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab('patients')}
            className={`text-white font-bold py-2 px-4 rounded ${
              activeTab === 'patients' ? 'bg-gray-700' : 'bg-gray-800'
            }`}
          >
            Patients
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'details' && (
          <div className="text-white">
            <h2 className="text-xl font-semibold mb-4">Doctor Details</h2>
            <p className="mb-2">Name: Dr. Ramesh babu</p>
            <p className="mb-2">Specialty: Obstetrics and Gynecology</p>
            <p className="mb-2">Years of Experience: 15</p>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="text-white">
            <h2 className="text-xl font-semibold mb-4">Patients</h2>
            <ul className="space-y-4">
              {patients.map((patient) => (
                <li key={patient.id}>
                  <button
                    onClick={() => handlePatientClick(patient.id)}
                    className="text-white font-medium hover:underline"
                  >
                    {patient.name}
                  </button>
                  {activePatient === patient.id && (
                    <div className="mt-2 ml-4 space-y-3">
                      <button
                        onClick={() => handleOptionClick('thisWeek')}
                        className="block w-full text-left bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm hover:bg-gray-600"
                      >
                        This Week's Chat History
                      </button>
                      <button
                        onClick={() => handleOptionClick('thisMonth')}
                        className="block w-full text-left bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm hover:bg-gray-600"
                      >
                        This Month's Chat History
                      </button>
                      <button
                        onClick={() => handleOptionClick('summarize')}
                        className="block w-full text-left bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm hover:bg-gray-600"
                      >
                        Summarize
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default DocDash;

