import React, { useState } from "react";

const RoutePanel = ({ roomsData, onRouteChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [startRoom, setStartRoom] = useState("");
    const [endRoom, setEndRoom] = useState("");

    const allRooms = Object.values(roomsData).flat();

    const handleBuild = () => {
        if (startRoom && endRoom && onRouteChange) {
            onRouteChange(startRoom, endRoom);
        }
    };

    const handleClear = () => {
        setStartRoom("");
        setEndRoom("");
        if (onRouteChange) onRouteChange(null, null);
    };

    return (
        <div className="route-panel-wrapper">
            <button className="route-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "❌ Закрити маршрут" : "🗺️ Маршрутизація"}
            </button>

            {isOpen && (
                <div className="route-card">
                    <h3>Побудувати маршрут</h3>

                    <div className="select-box">
                        <label>Звідки (Точка А):</label>
                        <select value={startRoom} onChange={(e) => setStartRoom(e.target.value)}>
                            <option value="">-- Оберіть аудиторію --</option>
                            {allRooms.map(r => <option key={`start-${r.id}`} value={r.id}>{r.name}</option>)}
                        </select>
                    </div>

                    <div className="select-box">
                        <label>Куди (Точка Б):</label>
                        <select value={endRoom} onChange={(e) => setEndRoom(e.target.value)}>
                            <option value="">-- Оберіть аудиторію --</option>
                            {allRooms.map(r => <option key={`end-${r.id}`} value={r.id}>{r.name}</option>)}
                        </select>
                    </div>

                    <div className="action-buttons">
                        <button className="build-btn" onClick={handleBuild} disabled={!startRoom || !endRoom}>
                            Прокласти шлях
                        </button>
                        <button className="clear-btn" onClick={handleClear}>Скинути</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoutePanel;