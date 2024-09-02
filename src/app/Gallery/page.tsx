import { BsSend } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export default function Gallery() {
  const galleryData = [
    {
      img: "https://i.imgur.com/5yeBVeM.jpeg",
      title: "Gallery 1",
      description: "Description 1",
    },
    {
      img: "https://i.imgur.com/5yeBVeM.jpeg",
      title: "Gallery 2",
      description: "Description 2",
    },
    {
      img: "https://i.imgur.com/5yeBVeM.jpeg",
      title: "Gallery 3",
      description: "Description 3",
    },
    {
      img: "https://i.imgur.com/5yeBVeM.jpeg",
      title: "Gallery 4",
      description: "Description 4",
    },
    {
      img: "https://i.imgur.com/5yeBVeM.jpeg",
      title: "Gallery 5",
      description: "Description 5",
    },
  ];
  return (
    <div className="flex min-h-screen w-full flex-wrap content-start justify-start p-5">
      <div className="grid grid-cols-3 gap-3 w-full">
        {galleryData.map((gallery, index) => (
          <div key={index} className="bg-white p-3 flex flex-col gap-3">
            <img className="h-52 w-full object-cover" src={gallery.img} />
            <ul className="mt-3 flex flex-wrap">
              <li className="mr-auto">
                <a
                  href="#"
                  className="flex text-gray-400 hover:text-gray-600 items-center justify-center gap-1"
                >
                  <FcLike />
                  <span className="text-xs">1000</span>
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="flex text-gray-400 hover:text-gray-600 items-center justify-center gap-1"
                >
                  <FaRegComment />
                  <span className="text-xs">10</span>
                </a>
              </li>
              <li className="mr-2">
                <a
                  href="#"
                  className="flex text-gray-400 hover:text-gray-600 items-center justify-center gap-1"
                >
                  <BsSend />
                  <span className="text-xs">2</span>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
