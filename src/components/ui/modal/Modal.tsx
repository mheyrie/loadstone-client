import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = "md",
}: ModalProps) {
  // close modal on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // P\revent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center h-screen w-full overflow-y-auto py-8">
      {/* backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-md transition-opacity min-h-screen duration-300"
        onClick={onClose}
        style={{ minHeight: "100vh", minWidth: "100vw" }}
      />

      {/* modal content*/}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl ${maxWidthClasses[maxWidth]} w-full mx-4 my-auto max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* title */}
        {title && (
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>
        )}

        {/* modal body */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
