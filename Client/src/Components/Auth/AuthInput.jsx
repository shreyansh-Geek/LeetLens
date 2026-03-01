export default function AuthInput({
  label,
  type = "text",
  placeholder
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm text-gray-400 mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full h-11 px-4 rounded-xl
          bg-gradient-to-b from-[#111113] to-[#0B0B0C]
          border border-white/10
          text-sm
          placeholder:text-gray-500
          focus:outline-none focus:border-white/20
        "
      />
    </div>
  )
}