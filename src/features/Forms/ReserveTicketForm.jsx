import React, { useEffect, useState } from "react";
import { fetchEventById } from "../../services/eventService";
import { reserveTicket } from "../../services/ticketService";

export default function ReserveTicketForm({ eventId, onClose }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const TICKET_TYPES = [
    { id: "early_bird", name: "Early Bird", price: 50 },
    { id: "standard", name: "Standard", price: 100 },
    { id: "vip", name: "VIP", price: 200 },
  ];

  useEffect(() => {
    const loadEvent = async () => {
      try {
        const data = await fetchEventById(eventId);
        setEvent(data);
        // Initialize quantities for constant ticket types
        const initialQuantities = {};
        TICKET_TYPES.forEach((type) => {
          initialQuantities[type.id] = 0;
        });
        setQuantities(initialQuantities);
        console.log(data);
      } catch (err) {
        console.error("Failed to load event", err);
      } finally {
        setLoading(false);
      }
    };
    if (eventId) loadEvent();
  }, [eventId]);

  const handleQuantityChange = (typeId, delta) => {
    setQuantities((prev) => {
      const current = prev[typeId] || 0;
      const next = Math.max(0, Math.min(3, current + delta)); // Max 3
      return { ...prev, [typeId]: next };
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault(); // Not needed for type="button"
    console.log("handleSubmit triggered");
    setIsSubmitting(true);

    const items = Object.entries(quantities)
      .filter(([_, qty]) => qty > 0)
      .map(([typeId, qty]) => ({
        ticketTypeId: typeId,
        quantity: qty,
      }));

    if (items.length === 0) {
      alert("Please select at least one ticket.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      eventId: eventId,
      attendeeId: "2",
      items: items,
    };

    console.log("Sending payload:", payload);

    try {
      await reserveTicket(payload);
      alert("Reservation successful!");
      setTimeout(() => onClose(), 1000);
    } catch (error) {
      console.error("Reservation error:", error);
      alert("Error: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg">Loading event details...</div>
      </div>
    );
  }

  if (!event) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto w-full max-w-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
        >
          ✕
        </button>

        {/* Header Image */}
        <div className="relative h-48 w-full shrink-0">
          <img
            src={event.backgroundImageUrl || "https://via.placeholder.com/600x300"}
            alt={event.name}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h2 className="text-2xl font-bold text-white">{event.name}</h2>
            <div className="flex gap-4 text-white/90 text-sm mt-2">
              <span>
                <i className="ri-calendar-line mr-1"></i>
                {new Date(event.startsAt).toLocaleDateString()}
              </span>
              <span>
                <i className="ri-time-line mr-1"></i>
                {new Date(event.startsAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Ticket Types */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Select Tickets
            </h3>
            <div className="space-y-4">
              {TICKET_TYPES.map((type) => (
                <div
                  key={type.id}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 transition-colors"
                >
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {type.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      ${type.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(type.id, -1)}
                      disabled={quantities[type.id] <= 0}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">
                      {quantities[type.id] || 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(type.id, 1)}
                      disabled={quantities[type.id] >= 3}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total & Submit */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <button
              type="button"
              onClick={(e) => { console.log("Button clicked"); handleSubmit(e); }}
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
            >
              {isSubmitting ? "Processing..." : "Reserve Tickets"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
