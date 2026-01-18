import Header from "@/components/dashboard/overview/Header";
import Main from "@/components/dashboard/overview/Main";
import { useState } from "react";
import Spinner from "@/components/ui/Spinner";

export default function Overview() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? <Spinner/> : 
        <div className="text-start">
          {" "}
          <Header />
          <Main/>
        </div>
      }
    </>
  );
}
