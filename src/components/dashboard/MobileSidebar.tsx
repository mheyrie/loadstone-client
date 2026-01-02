import Sidebar from "./Sidebar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export default function MobileSidebar({isOpen, onClose}:Props) {
  return (
    <>
    {/* backdrop  */}
    {isOpen && (
      <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40 lg:hidden"></div>
    )}
{/* drawer */}
<div className={`fixed top-8 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0':'-translate-x-full'}`}>
  <Sidebar/>
</div>
    </>
  )
}