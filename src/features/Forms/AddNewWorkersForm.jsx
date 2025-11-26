import React, { useState } from "react";
import { addWorker } from "../../services/venueService"; // <-- your request function

export default function AddNewWorkersForm({
  AddNewWorkers,
  setAddNewWorkers,
  venueID,
}) {
  const [venueWorkers, setVenueWorkers] = useState([
    { fullName: "", username: "", email: "" },
  ]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Update worker fields
  const handleWorkerChange = (index, field, value) => {
    const updated = [...venueWorkers];
    updated[index][field] = value;
    setVenueWorkers(updated);
  };

  // Add extra worker input
  const addWorkerField = () => {
    setVenueWorkers((prev) => [
      ...prev,
      { fullName: "", username: "", email: "" },
    ]);
  };

  // Remove worker input
  const removeWorker = (index) => {
    setVenueWorkers((prev) => prev.filter((_, i) => i !== index));
  };

  // Submit workers request
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addWorker(venueID, venueWorkers); // send the array directly
      setSuccess(true);

      // Reset the form
      setVenueWorkers([{ fullName: "", username: "", email: "" }]);

      // Close modal after a short delay
      setTimeout(() => {
        setSuccess(false);
        setAddNewWorkers(false);
      }, 1200);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!AddNewWorkers) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-[500px] space-y-6 shadow-lg"
      >
        <h3 className="text-xl font-bold">Add Workers</h3>

        {venueWorkers.map((worker, index) => (
          <div key={index} className="border p-4 rounded-lg space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              value={worker.fullName}
              onChange={(e) =>
                handleWorkerChange(index, "fullName", e.target.value)
              }
              className="w-full border rounded px-3 py-2"
              required
            />

            <input
              type="text"
              placeholder="Username"
              value={worker.username}
              onChange={(e) =>
                handleWorkerChange(index, "username", e.target.value)
              }
              className="w-full border rounded px-3 py-2"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={worker.email}
              onChange={(e) =>
                handleWorkerChange(index, "email", e.target.value)
              }
              className="w-full border rounded px-3 py-2"
              required
            />

            {venueWorkers.length > 1 && (
              <button
                type="button"
                onClick={() => removeWorker(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addWorkerField}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Add Worker
        </button>

        <div className="flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={() => setAddNewWorkers(false)}
            className="px-4 py-2 bg-gray-300 rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 min-w-[120px] justify-center"
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {!loading && !success && "Submit"}

            {success && "✔️"}
          </button>
        </div>
      </form>
    </div>
  );
}
