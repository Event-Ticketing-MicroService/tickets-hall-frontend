import React, { use, useState } from "react";
import ImageDD from "../venueDashboard/components/ImageDD";
import GoogleMaps from "../../shared-components/GoogleMapsApi";

export default function VenueRegistrationForm({ onClose }) {
  const [formData, setFormData] = useState({
    venueName: "",
    venueAddress: "",
    venuePhone: "",
    venueEmail: "",
    password: "",
    venueCapacity: "",
    venueDescription: "",
    venueCountry: "",
    venueLatitude: "",
    venueLongitude: "",
    radius: 500,
    venueImages: [],
    venueWorkers: [{ fullName: "", username: "", email: "" }],
  });

  const [longitude, setlongitude] = useState(54.979021);
  const [latitude, setLatitude] = useState(24.799448);
  const [address, setAddress] = useState("");
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleImageUpload = (images) => {
    setFormData((prev) => ({ ...prev, venueImages: images }));
  };

  const handleWorkerChange = (index, field, value) => {
    const updatedWorkers = [...formData.venueWorkers];
    updatedWorkers[index][field] = value;
    setFormData((prev) => ({ ...prev, venueWorkers: updatedWorkers }));
  };

  const addWorker = () => {
    setFormData((prev) => ({
      ...prev,
      venueWorkers: [
        ...prev.venueWorkers,
        { fullName: "", username: "", email: "" },
      ],
    }));
  };

  const removeWorker = (index) => {
    const updated = formData.venueWorkers.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, venueWorkers: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Venue:", formData);
    yu;
    // TODO: Add API call
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="relative bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto w-full max-w-4xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Register Your Venue
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Venue Name
              </label>
              <input
                type="text"
                name="venueName"
                value={formData.venueName}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Capacity
              </label>
              <input
                type="number"
                name="venueCapacity"
                value={formData.venueCapacity}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Address
            </label>
            <input
              type="text"
              name="venueAddress"
              value={formData.venueAddress}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>

          {/* Location */}

          <button
            className="rounded-full bg-blue-700 hover:bg-blue-900 hover:cursor-pointer p-3 text-white font-bold"
            onClick={() => {
              setIsMapOpen(true);
            }}
          >
            Choose location on map📍
          </button>

          {isMapOpen && (
            <GoogleMaps
              address={address}
              setAddress={setAddress}
              radius={formData.radius}
              latitude={latitude}
              longitude={longitude}
              setLatitude={(lat) => {
                setLatitude(lat);
                setFormData((prev) => ({ ...prev, venueLatitude: lat }));
              }}
              setlongitude={(lng) => {
                setlongitude(lng);
                setFormData((prev) => ({ ...prev, venueLongitude: lng }));
              }}
              onCloseMap={() => setIsMapOpen(false)}
            />
          )}

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Phone
              </label>
              <input
                type="text"
                name="venuePhone"
                value={formData.venuePhone}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                name="venueEmail"
                value={formData.venueEmail}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Password + Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                Country
              </label>
              <input
                type="text"
                name="venueCountry"
                value={formData.venueCountry}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Description
            </label>
            <textarea
              name="venueDescription"
              value={formData.venueDescription}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              placeholder="Write a short description about your venue..."
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Venue Images
            </label>
            <ImageDD onUpload={handleImageUpload} />
          </div>

          {/* Workers Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Venue Workers
            </h3>
            {formData.venueWorkers.map((worker, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-gray-200 dark:border-gray-700 p-4 rounded-lg"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  value={worker.fullName}
                  onChange={(e) =>
                    handleWorkerChange(index, "fullName", e.target.value)
                  }
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={worker.username}
                  onChange={(e) =>
                    handleWorkerChange(index, "username", e.target.value)
                  }
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={worker.email}
                  onChange={(e) =>
                    handleWorkerChange(index, "email", e.target.value)
                  }
                  className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  required
                />
                {formData.venueWorkers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeWorker(index)}
                    className="text-red-600 text-sm font-medium mt-2 hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addWorker}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-500 hover:bg-blue-100 transition-colors text-sm font-medium"
            >
              + Add Another Worker
            </button>
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Submit Venue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
