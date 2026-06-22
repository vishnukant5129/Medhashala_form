export default function RadioGroup({ options, value, onChange }) {
  return (
    <div className="grid gap-3 mt-3">
      {options.map((opt, i) => (
        <label
          key={i}
          className={`p-4 rounded-xl border cursor-pointer transition-all
          ${
            value === opt
              ? "bg-[#F4B400] text-[#0B1F3A]"
              : "bg-white"
          }`}
        >
          <input
            type="radio"
            className="hidden"
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}