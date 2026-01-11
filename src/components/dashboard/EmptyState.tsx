import BaseDirectories from "@/baseDir/baseDirectories";

type EmptyStateProps = {
  title?: string;
  message?: string;
  imageSrc?: string;
  actionButton?: React.ReactNode;
};

export default function EmptyState({
  title = "No loans yet",
  message = "You haven't applied for any loans. Start by applying for a loan to see it here.",
  imageSrc = `${BaseDirectories.IMAGES_DIR}/dashboard/grass.png`,
  actionButton,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="mb-6 max-w-xs">
        <img 
          src={imageSrc} 
          alt="Empty state illustration" 
          className="w-full h-auto"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
        {title}
      </h3>
      
      <p className="text-gray-500 text-center max-w-md mb-6">
        {message}
      </p>
      
      {actionButton && (
        <div className="mt-4">
          {actionButton}
        </div>
      )}
    </div>
  );
}
