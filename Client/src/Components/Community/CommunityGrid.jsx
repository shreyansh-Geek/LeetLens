import CommunityCard from "./CommunityCard";

export default function CommunityGrid({ items }) {
  if (!items?.length) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-28">
        <p className="text-gray-300 font-medium">
          No community creations yet
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Be the first to share your thumbnail
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <CommunityCard key={item.id} item={item} />
      ))}
    </div>
  );
}