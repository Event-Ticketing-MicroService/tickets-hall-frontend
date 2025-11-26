import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/categoryService";
import { createEvent } from "../../services/eventService";
import ImageDD from "../venueDashboard/components/ImageDD";
import ShinyText from "../../shared-components/ShinyText";
import GoogleMaps from "../../shared-components/GoogleMapsApi";
import Spinner from "../../shared-components/Spinner";

export default function CreateNewEvent({ createNewEvent, SetCreateNewEvent }) {
  const [formData, setFormData] = useState({
    categoryId: "",
    name: "",
    description: "",
    location: "",
    venueLatitude: "",
    venueLongitude: "",
    startsAt: "",
    endsAt: "",
    totalAvailableTickets: "",
    backgroundImage: null, // store File object
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [longitude, setLongitude] = useState(54.979021);
  const [latitude, setLatitude] = useState(24.799448);
  const [address, setAddress] = useState("");
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Fetch categories
  const {
    data: categoriesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  const categories = categoriesData?.data || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (images) => {
    setFormData((prev) => ({
      ...prev,
      backgroundImage: images[0] || null, // File object
    }));
    setSelectedImages(images);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("categoryId", formData.categoryId);
    fd.append("name", formData.name);
    fd.append("description", formData.description);
    fd.append("location", formData.location);
    fd.append("latitude", formData.venueLatitude);
    fd.append("longitude", formData.venueLongitude);
    fd.append("startsAt", formData.startsAt);
    fd.append("endsAt", formData.endsAt);
    fd.append("totalAvailableTickets", formData.totalAvailableTickets);

    if (formData.backgroundImage) {
      fd.append("backgroundImage", formData.backgroundImage);
    }

    try {
      await createEvent(fd);
      SetCreateNewEvent(false);
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    }
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
          {/* Category */}
          <label className="text-gray-700 font-bold">Category *</label>
          {isLoading ? (
            <div className="w-full items-center justify-center flex">
              <Spinner className="mx-auto" />
            </div>
          ) : isError ? (
            <p className="text-red-500">
              Error loading categories: {error.message}
            </p>
          ) : (
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="border rounded-md p-2 focus:outline-blue-500"
              required
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          )}

          {/* Name */}
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

          {/* Description */}
          <label className="text-gray-700 font-bold">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your event..."
            className="border rounded-md p-2 focus:outline-blue-500 resize-none"
            rows="3"
            required
          />

          {/* Location */}
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
            type="button"
            className="rounded-full bg-blue-700 hover:bg-blue-900 hover:cursor-pointer p-3 text-white font-bold"
            onClick={() => setIsMapOpen(true)}
          >
            Choose location on map📍
          </button>

          {isMapOpen && (
            <GoogleMaps
              address={address}
              setAddress={setAddress}
              latitude={latitude}
              longitude={longitude}
              setLatitude={(lat) => {
                setLatitude(lat);
                setFormData((prev) => ({ ...prev, venueLatitude: lat }));
              }}
              setlongitude={(lng) => {
                setLongitude(lng);
                setFormData((prev) => ({ ...prev, venueLongitude: lng }));
              }}
              onCloseMap={() => setIsMapOpen(false)}
            />
          )}

          {/* Background Image */}
          <label className="text-gray-700 font-bold">Background Image *</label>
          <ImageDD
            selectedImage={selectedImages}
            setSelectedImage={setSelectedImages}
            onUpload={handleImageUpload}
          />

          {/* Dates */}
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

          {/* Total Tickets */}
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
