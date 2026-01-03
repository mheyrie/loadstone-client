import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <div className="bg-[#E4E0F3] p-4 flex justify-between items-center">
      <div className="">
        <h2 className="border-b border-4 border-b-yellow-400 text-2xl ">Upgrade your account</h2>
      </div>
      <Button content="UPGRADE NOW" classes="secondary-btn bg-yellow-400! "/>
    </div>
  )
}
