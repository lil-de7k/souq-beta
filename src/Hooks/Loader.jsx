// src/components/Loader.jsx
import { BounceLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen z-50">
      <div className="flex flex-col items-center space-y-4">
        <BounceLoader color="#000000" size={window.innerWidth < 640 ? 30 : 45} />
      </div>
    </div>
  );
}