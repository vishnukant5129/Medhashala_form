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
            className="mb-6 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            style={{ border: `1px solid ${COLORS.border}` }}
        >
            {/* QUESTION LABEL */}
            <div className="mb-5">
                <h3
                    className="text-base md:text-lg font-bold tracking-tight leading-snug flex items-start gap-1"
                    style={{ color: COLORS.primary }}
                >
                    <span>{q.label}</span>
                    {q.required !== false && (
                        <span className="text-rose-500 font-extrabold select-none" title="Required field">*</span>
                    )}
                </h3>
            </div>

            {/* TEXT INPUT TYPE */}
            {q.type === "text" && (
                <div className="relative rounded-xl transition-all duration-200">
                    <input
                        type="text"
                        value={value || ""}
                        onChange={handleTextChange}
                        placeholder="Type your answer here..."
                        className="w-full px-5 py-3.5 rounded-xl border outline-none transition-all duration-200 text-sm md:text-base bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-amber-500/10 focus:shadow-sm"
                        style={{
                            borderColor: COLORS.border,
                            color: COLORS.text,
                        }}
                        onFocus={(e) => (e.target.style.borderColor = COLORS.accent)}
                        onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
                    />
                </div>
            )}

            {/* RADIO INPUT TYPE */}
            {q.type === "radio" && (
                <div className="grid gap-3">
                    {q.options.map((opt) => {
                        const isSelected = value === opt;
                        return (
                            <label
                                key={opt}
                                className="flex items-center justify-between px-5 py-3.5 rounded-xl cursor-pointer border text-sm md:text-base font-medium transition-all duration-200 group active:scale-[0.99]"
                                style={{
                                    borderColor: isSelected ? COLORS.accent : COLORS.border,
                                    backgroundColor: isSelected ? `${COLORS.accent}10` : "transparent",
                                }}
                            >
                                <span style={{ color: isSelected ? COLORS.primary : COLORS.text }}>
                                    {opt}
                                </span>

                                <input
                                    type="radio"
                                    name={q.id}
                                    value={opt}
                                    checked={isSelected}
                                    onChange={handleRadioChange}
                                    className="w-4 h-4 cursor-pointer transition-transform duration-200 group-hover:scale-110"
                                    style={{
                                        accentColor: COLORS.accent,
                                    }}
                                />
                            </label>
                        );
                    })}
                </div>
            )}

            {/* CHECKBOX INPUT TYPE */}
            {q.type === "checkbox" && (
                <div className="grid gap-3">
                    {q.options.map((opt) => {
                        const isChecked = value?.includes(opt);
                        return (
                            <label
                                key={opt}
                                className="flex items-center justify-between px-5 py-3.5 rounded-xl cursor-pointer border text-sm md:text-base font-medium transition-all duration-200 group active:scale-[0.99]"
                                style={{
                                    borderColor: isChecked ? COLORS.accent : COLORS.border,
                                    backgroundColor: isChecked ? `${COLORS.accent}10` : "transparent",
                                }}
                            >
                                <span style={{ color: isChecked ? COLORS.primary : COLORS.text }}>
                                    {opt}
                                </span>

                                <input
                                    type="checkbox"
                                    checked={isChecked || false}
                                    onChange={() => handleCheckboxChange(opt)}
                                    className="w-4 h-4 rounded cursor-pointer transition-transform duration-200 group-hover:scale-110"
                                    style={{
                                        accentColor: COLORS.accent,
                                    }}
                                />
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
}