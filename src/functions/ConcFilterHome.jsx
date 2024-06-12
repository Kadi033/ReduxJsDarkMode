import Home from "../pages/Home";
import FilterSearcj from "../components/FilterSearcj";
import { useSelector } from "react-redux";
function ConcFilterHome() {
  const currentTheme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`${
        currentTheme === "dark"
          ? "bg-[#121721] text-white"
          : "bg-[#f4f6f8] text-[#121721]"
      }`}
    >
      <div className="min-h-screen flex items-center justify-center ">
        <Home />
      </div>

      <FilterSearcj />
    </div>
  );
}

export default ConcFilterHome;
