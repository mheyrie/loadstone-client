import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <div className="bg-[#E4E0F3] py-2 px-6 flex justify-between items-center">
      <div className="mb-4">
        <h2 className="border-6 border-b-yellow-400  font-bold">Upgrade your account</h2>
      </div>
      <Button content="UPGRADE NOW" classes="secondary-btn bg-yellow-400! text-xs! py-2! px-4! font-bold! border-none!" />
    </div>
  )
}
