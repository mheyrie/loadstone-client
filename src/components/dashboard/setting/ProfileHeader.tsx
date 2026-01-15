interface ProfileHeaderProps {
  name?: string;
  imageUrl?: string;
}

export default function ProfileHeader({ name = "Zion Dei", imageUrl }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-24 h-24 rounded-full bg-gray-200 mb-3 overflow-hidden">
        <img 
          src={imageUrl || "/images/dashboard/profile.jpg"}
          alt="Profile" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Ctext fill='%236b7280' font-family='Arial' font-size='40' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EZD%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">{name}</h2>
      <span className="bg-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
        Wallet Account Details
      </span>
    </div>
  );
}
