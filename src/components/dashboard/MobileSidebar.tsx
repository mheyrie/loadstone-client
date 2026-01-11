import Sidebar from "./Sidebar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export default function MobileSidebar({ isOpen, onClose }: Props) {
  return (
    <>
    {/* backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40 lg:hidden
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* drawer */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white z-50
          transform transition-transform duration-300 ease-out
          lg:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        <Sidebar onNavigate={onClose} />
      </aside>
    </>
  );
}
