import scoot from "../assets/scoot.svg";
import coffee from "../assets/coffeeroasters.svg";
import crative from "../assets/creative.svg";
import maker from "../assets/maker.svg";
import craft from "../assets/mastercraft.svg";
import office from "../assets/officelite.svg";
import pod from "../assets/pod.svg";
import typemas from "../assets/typemaster.svg";
import { useSelector } from "react-redux";

function Home() {
  const currentTheme = useSelector((state) => state.theme.theme);

  const data = [
    {
      photo: scoot,
      toptext: "5h ago . Full Time",
      text: "Senior Software Engineer",
      midtext: "Scoot",
      endtext: "United Kingdom",
    },
    {
      photo: coffee,
      toptext: "20h ago . Part Time",
      text: "Senior Software Engineer",
      midtext: "Blogr",
      endtext: "United States",
    },
    {
      photo: crative,
      toptext: "1d ago . Part Time",
      text: "Senior Software Engineer",
      midtext: "Vector",
      endtext: "Georgia",
    },
    {
      photo: maker,
      toptext: "2d ago . Full Time",
      text: "Senior Software Engineer",
      midtext: "Office Lite",
      endtext: "Japan",
    },
    {
      photo: craft,
      toptext: "2d ago . Part Time",
      text: "Senior Software Engineer",
      midtext: "Pod",
      endtext: "Thailand",
    },
    {
      photo: office,
      toptext: "4d ago . Part Time",
      text: "Senior Software Engineer",
      midtext: "Creative",
      endtext: "Germany",
    },
    {
      photo: pod,
      toptext: "5h ago . Full Time",
      text: "Senior Software Engineer",
      midtext: "Pomodoro",
      endtext: "United States",
    },
    {
      photo: typemas,
      toptext: "1w ago . Full Time",
      text: "Senior Software Engineer",
      midtext: "Maker",
      endtext: "United Kingdom",
    },
    {
      photo: scoot,
      toptext: "1w ago . Part Time",
      text: "Senior Software Engineer",
      midtext: "Coffeeroasters",
      endtext: "Singapore",
    },
  ];
  return (
    <div className={`mt-24 grid grid-cols-3 gap-8 justify-items-center`}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`pt-12 pb-7 pl-12 pr-28 rounded-xl relative mt-5 ${
            currentTheme === "dark" ? "bg-[#19202d] text-white" : "bg-white"
          }`}
        >
          <div className="bg-black pt-5 pb-5 pl-5 pr-5 rounded-xl w-max absolute -top-7">
            <img className="w-8 h-8 object-contain" src={item.photo} />
          </div>
          <p className="text-gray-300 pt-4">{item.toptext}</p>
          <h1 className="pt-4 font-bold cursor-pointer hover:opacity-50">
            {item.text}
          </h1>
          <p className="text-gray-300 pt-4">{item.midtext}</p>
          <h2 className="text-[#5964e0] pt-4">{item.endtext}</h2>
        </div>
      ))}
      <div></div>
      <button className="bg-[#5964e0] text-white p-4 pl-6 pr-6 rounded-lg mb-9 hover:opacity-70">
        Load More
      </button>
    </div>
  );
}

export default Home;
