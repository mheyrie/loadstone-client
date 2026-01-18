import BaseDirectories from "@/baseDir/baseDirectories";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <div className=""> 
        <img src={`${BaseDirectories.LOGOS_DIR}/brand.png`}  alt="Loadstone"/></div>
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-gray-800 tracking-tight">
          404
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Hint */}
        <p className="mt-2 text-sm text-gray-500">
          It may have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
