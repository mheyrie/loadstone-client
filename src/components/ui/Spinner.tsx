export default function Spinner() {
  return (
    <div className="backdrop-blur-md h-screen w-full fixed top-0 left-0 flex justify-center items-center z-50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-brand-purple border-t-transparent "></div>
    </div>
  );
}
