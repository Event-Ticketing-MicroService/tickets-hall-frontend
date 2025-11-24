import React, { useEffect, useState } from "react";
import ImageDD from "../venueDashboard/components/ImageDD";
import ShinyText from "../../shared-components/ShinyText";
import GoogleMaps from "../../shared-components/GoogleMapsApi"; // import the same map component

export default function CreateNewEvent({ createNewEvent, SetCreateNewEvent }) {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
    location: "",
    latitude: "",
    longitude: "",
    backgroundImageUrl: "",
    isPublished: false,
    publishedAt: "",
    startsAt: "",
    endsAt: "",
    totalAvailableTickets: "",
    createdAt: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [longitude, setlongitude] = useState(54.979021);
  const [latitude, setLatitude] = useState(24.799448);
  const [address, setAddress] = useState("");
  const [isMapOpen, setIsMapOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];
    const currentTime = now.toTimeString().split(" ")[0];

    setFormData((prev) => ({
      ...prev,
      publishedAt: currentDate,
      createdAt: currentTime,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting event:", formData);
    // TODO: send formData to backend API
  };

  if (!createNewEvent) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start z-50 pt-20">
      <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[650px] p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => SetCreateNewEvent(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-6xl hover:cursor-pointer"
        >
          &times;
        </button>

        <ShinyText
          text={"Create New Event"}
          className="font-bold text-4xl pb-5"
          speed={5}
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-700 font-bold">Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded-md p-2 focus:outline-blue-500"
            required
          >
            <option value="">Select category</option>
            <option value="music">Music</option>
            <option value="conference">Conference</option>
            <option value="sports">Sports</option>
            <option value="theatre">Theatre</option>
            <option value="festival">Festival</option>
          </select>

          <label className="text-gray-700 font-bold">Event Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter event name"
            className="border rounded-md p-2 focus:outline-blue-500"
            required
          />

          <label className="text-gray-700 font-bold">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your event..."
            className="border rounded-md p-2 focus:outline-blue-500 resize-none"
            rows="3"
            required
          ></textarea>

          <label className="text-gray-700 font-bold">Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, State"
            className="border rounded-md p-2 focus:outline-blue-500"
            required
          />

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

          <label className="text-gray-700 font-bold">Background Image</label>
          <ImageDD
            selectedImage={selectedImages}
            setSelectedImage={setSelectedImages}
          />

          <input
            type="url"
            name="backgroundImageUrl"
            value={formData.backgroundImageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="border rounded-md p-2 focus:outline-blue-500"
          />

          <div className="grid grid-rows-2 md:grid-cols-2 gap-3">
            <div>
              <label className="text-gray-700 font-bold">Starts At *</label>
              <input
                type="datetime-local"
                name="startsAt"
                value={formData.startsAt}
                onChange={handleChange}
                required
                className="border rounded-md p-2 focus:outline-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-700 font-bold">Ends At *</label>
              <input
                type="datetime-local"
                name="endsAt"
                value={formData.endsAt}
                onChange={handleChange}
                required
                className="border rounded-md p-2 focus:outline-blue-500"
              />
            </div>
          </div>

          <label className="text-gray-700 font-bold">
            Total Available Tickets *
          </label>
          <input
            type="number"
            name="totalAvailableTickets"
            value={formData.totalAvailableTickets}
            onChange={handleChange}
            placeholder="Enter total tickets"
            className="border rounded-md p-2 focus:outline-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white font-medium rounded-md py-2 mt-2 hover:bg-blue-700 transition"
          >
            Submit Event
          </button>
        </form>
      </div>
    </div>
  );
}
