export default function CardBody({ title, children }) {
  return (
    <div className="p-4">
      <h3 className="text-sm font-medium text-gray-200 line-clamp-2">
        {title}
      </h3>
      {children}
    </div>
  );
}