import React, { useState } from 'react';

<<<<<<< HEAD
const Service = () => {
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [userId, setUserId] = useState('');
    const [submitEnabled, setSubmitEnabled] = useState(false);
=======
const Services = () => {
  return (
    <div className='pt-16'>
      Asalamalaikum
    </div>
  )
}
>>>>>>> 8bc70af16c35e3550d0d0715453c03612e736bdc

    const activateService = () => {
        setShowServiceForm(true);
    };

    const handleServiceSelection = (serviceType) => {
        setSelectedService(serviceType);
        setSubmitEnabled(true); // Enable submit button when service is selected
    };

    const submitServiceForm = (event) => {
        event.preventDefault();
        const confirmation = window.confirm(`Dear user ${userId}, you have selected ${selectedService} service. Proceed with this service?`);
        if (confirmation) {
            window.alert(`Congratulations user ${userId}! Your selected service (${selectedService}) is successful.`);
            closeServiceForm();
        }
    };

    const closeServiceForm = () => {
        setShowServiceForm(false);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-between p-8 w-full">
                <div className="w-1/2">
                    <img src="service.jpg" alt="Service Image" className="w-full rounded-2xl" />
                </div>
                <div className="w-1/2 px-8">
                    <h1 className="maintext text-5xl text-yellow-500 font-bold font-serif">OUR</h1>
                    <h2 className="subtext text-4xl text-green-600 font-serif font-bold">SERVICES </h2>
                    <br/>
                    <p className='text-3xl mx-1'>We offer waste management solutions to keep your space clean and green. </p>
                    <div className="mt-8">
                        <button onClick={activateService} className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 mt-4 rounded-lg">Activate Services</button>
                    </div>
                </div>
            </div>
            {showServiceForm && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg">
                        <form onSubmit={submitServiceForm}>
                            <input type="text" name="userid" placeholder="Enter your user id" className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4" onChange={(e) => setUserId(e.target.value)} required />
                            <select onChange={(e) => handleServiceSelection(e.target.value)} className="block w-full border border-gray-300 rounded-md px-4 py-2 mb-4">
                                <option value="">Select Service</option>
                                <option value="home">Home</option>
                                <option value="business">Business</option>
                            </select>
                            {selectedService && (
                                <>
                                    <div className="flex justify-between mb-4">
                                        <button type="button" onClick={() => alert("Daily events selected")} className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg mr-2">Daily Events</button>
                                        <button type="button" onClick={() => alert("Weekly events selected")} className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-lg mr-2">Weekly Events</button>
                                        <button type="button" onClick={() => alert("Special events selected")} className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg">Special Events</button>
                                    </div>
                                    {submitEnabled && <button type="submit" className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 mt-4 rounded-lg">Submit</button>}
                                </>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Service;
