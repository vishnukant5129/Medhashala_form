import InputField from "./InputField";
import RadioGroup from "./RadioGroup";

export default function Question({ q, value, onChange }) {
    return (
        <div className="mb-10 p-6 rounded-2xl bg-white/70 backdrop-blur-xl border">

            <h3 className="text-lg font-semibold text-[#0B1F3A]">
                {q.label}
            </h3>

            {q.type === "text" && (
                <InputField
                    value={value || ""}
                    onChange={(e) => onChange(q.id, e.target.value)}
                    label=""
                />
            )}

            {q.type === "radio" && (
                <RadioGroup
                    options={q.options}
                    value={value}
                    onChange={(val) => onChange(q.id, val)}
                />
            )}
        </div>
    );
}