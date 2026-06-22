export default function InputField({ value, onChange, label }) {
    return (
        <div className="mb-6">
            <label className="text-[#0B1F3A] font-semibold">
                {label}
            </label>

            <input
                value={value}
                onChange={onChange}
                className="w-full mt-2 p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F4B400]"
                placeholder="Enter your answer..."
            />
        </div>
    );
}