import { COLORS } from "../../constants/colors.js";

export default function Question({ q, value, onChange }) {
    const handleRadioChange = (e) => {
        onChange(q.id, e.target.value, q.type);
    };

    const handleTextChange = (e) => {
        onChange(q.id, e.target.value, q.type);
    };

    const handleCheckboxChange = (option) => {
        onChange(q.id, value, q.type, option);
    };

    return (
        <div
            className="mb-8 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            style={{ backgroundColor: COLORS.white, border: `1px solid ${COLORS.border}` }}
        >
            {/* Question */}
            <h3
                className="text-lg font-semibold mb-5"
                style={{ color: COLORS.primary }}
            >
                {q.label}
            </h3>

            {/* TEXT */}
            {q.type === "text" && (
                <input
                    type="text"
                    value={value || ""}
                    onChange={handleTextChange}
                    placeholder="Type your answer..."
                    className="w-full px-4 py-3 rounded-xl outline-none transition"
                    style={{
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                    }}
                    onFocus={(e) =>
                        (e.target.style.borderColor = COLORS.accent)
                    }
                    onBlur={(e) =>
                        (e.target.style.borderColor = COLORS.border)
                    }
                />
            )}

            {/* RADIO */}
            {q.type === "radio" && (
                <div className="grid gap-3">
                    {q.options.map((opt) => (
                        <label
                            key={opt}
                            className="flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition"
                            style={{
                                border: `1px solid ${value === opt
                                        ? COLORS.accent
                                        : COLORS.border
                                    }`,
                                backgroundColor:
                                    value === opt ? "#FFF7E0" : COLORS.white,
                            }}
                        >
                            <span style={{ color: COLORS.text }}>
                                {opt}
                            </span>

                            <input
                                type="radio"
                                name={q.id}
                                value={opt}
                                checked={value === opt}
                                onChange={handleRadioChange}
                                style={{
                                    accentColor: COLORS.accent,
                                }}
                            />
                        </label>
                    ))}
                </div>
            )}

            {/* CHECKBOX */}
            {q.type === "checkbox" && (
                <div className="grid gap-3">
                    {q.options.map((opt) => (
                        <label
                            key={opt}
                            className="flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition"
                            style={{
                                border: `1px solid ${value?.includes(opt)
                                        ? COLORS.accent
                                        : COLORS.border
                                    }`,
                                backgroundColor: value?.includes(opt)
                                    ? "#FFF7E0"
                                    : COLORS.white,
                            }}
                        >
                            <span style={{ color: COLORS.text }}>
                                {opt}
                            </span>

                            <input
                                type="checkbox"
                                checked={value?.includes(opt) || false}
                                onChange={() =>
                                    handleCheckboxChange(opt)
                                }
                                style={{
                                    accentColor: COLORS.accent,
                                }}
                            />
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}