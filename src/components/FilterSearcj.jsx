import { location, search } from "../assets";
import "../App.css";
import { useSelector } from "react-redux";

function FilterSearcj() {
  const currentTheme = useSelector((state) => state.theme.theme);
  return (
    <div className="flex justify-center absolute top-[125px] left-1/2 -translate-x-1/2">
      <div
        className={`flex justify-center w-full max-w-[1100px] rounded-xl ${
          currentTheme === "dark" ? "bg-[#19202d] text-white" : "bg-white"
        }`}
      >
        <div className="flex justify-center items-center w-96 p-5 gap-6">
          <img src={search} alt="" />
          <input
            type="search"
            className={`outline-none h-max w-max ${
              currentTheme === "dark"
                ? "bg-[#19202d] text-white"
                : "bg-white text-[#19202d]"
            }`}
            placeholder="Filter by title, companies, expertise…"
          />
        </div>
        <div className="w-px h-full bg-[#f4f6f8]"></div>
        <div className="flex justify-center items-center w-96 p-5 gap-6">
          <img src={location} alt="" />
          <input
            type="search"
            className={`outline-none h-max w-max ${
              currentTheme === "dark"
                ? "bg-[#19202d] text-white"
                : "bg-white text-[#19202d]"
            }`}
            placeholder="Filter by location…"
          />
        </div>
        <div className="w-px h-full bg-[#f4f6f8]"></div>
        <div className="flex justify-center items-center w-96 p-5 gap-6">
          <input
            type="checkbox"
            className={`checkbox-custom w-5 h-5 appearance-none cursor-pointer rounded-md ${
              currentTheme === "dark"
                ? "bg-[#121721] text-white"
                : "bg-[#f4f6f8]"
            }`}
          />
          <h2
            className={`font-bold ${
              currentTheme === "dark" ? "text-white" : "text-[#121721]"
            }`}
          >
            Full Time Only
          </h2>
          <button
            className="outline-none bg-[#5964e0] text-white rounded-lg w-32 h-12"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSearcj;
