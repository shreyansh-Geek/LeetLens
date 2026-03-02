export default function IconButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        w-8 h-8
        flex items-center justify-center
        rounded-md
        bg-black/60 backdrop-blur
        border border-white/10
        text-gray-200
        hover:border-white/20
        hover:text-white
        transition
      "
    >
      {children}
    </button>
  );
}