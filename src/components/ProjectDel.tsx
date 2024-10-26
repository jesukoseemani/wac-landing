"use client";
import ArrowBox from "@/assets/SVG/ArrowBox";
import Star from "@/assets/SVG/Star";
import useStore from "@/store";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProjectDel = () => {
  const { title } = useParams();
  const router = useRouter();
  const projectRoute = useStore((state) => state.projectRoute);
  const setProjectRoute = useStore((state) => state.setProjectRoute);
  useEffect(() => {
    const res = projectRoute.filter((item) => item !== title);
    setProjectRoute(res);
  }, []);

  type titleprops = "ita" | "symba" | "beer";
  interface contentProps {
    url: string;
    title: string;
    location: string;
    description: React.JSX.Element;
    cast: { name: string; title: string }[] | null;
    crew: { name: string; title: string }[] | null;
    music: { name: string; title: string }[] | null;
  }

  const renderDetails: Record<"ita" | "symba" | "beer", contentProps> = {
    ita: {
      url: "https://youtu.be/X3BwXxbY7Pc?si=6tUZSHsWGigprlu9",
      title: "ITA: The World Outside",
      location: "Lagos, Nigeria",
      description: (
        <p className="text-grey-50 text-[14px] lg:text-[16px] mt-4">
          "ITA: <strong>The World Outside</strong>" is a dance expression film
          born from the creative energy that was reignited after months of
          isolation. During the pandemic, creatives were cut off from
          collaboration, their passions put on hold. But when the world began to
          open up again, WacPeople seized the moment, inviting available members
          of our community to a spontaneous gathering—what we call a "Wac
          Cruise." With no set direction, we simply brought together the talent
          on hand at a location in Lagos, Nigeria, and from this organic
          link-up, a masterpiece emerged. <br /> <br />
          ITA, named after the Yoruba word for "outside," symbolizes the freedom
          and exuberance that comes with stepping back into the world. The film
          features powerful dance performances, each one a raw expression of joy
          and creativity. These performances, enhanced by spoken words from Maya
          Angelou and set to the music of Samthing Soweto and Chronixx, embody
          the resilience and renewed spirit of our time.
          <br /> <br />
          This project is a testament to the magic that happens when creative
          minds come together, even without a plan. It’s a reflection of how we
          turned a challenging period into an opportunity to reconnect, create,
          and celebrate the world outside.
        </p>
      ),
      cast: [
        { name: "Dami Cool", title: "Artist" },
        { name: "Hermes Iyele", title: "Artist" },
        { name: "Tiwa of Lagos", title: "Artist" },
      ],
      crew: [
        { name: "FPD FILMS", title: "Director" },
        { name: "Yemi Animashaun", title: "Editor" },
        { name: "Fawole Peters", title: "Producer" },
        { name: "Maya Angelou", title: "Spoken Words" },
        { name: "Jimmy FPD", title: "Photography and BTS" },
        { name: "Yemi Animashaun", title: "Native Graphics" },
        { name: "TalkToAce", title: "Additional Graphics" },
        { name: "Amz Black", title: "Styling" },
        { name: "WacPeople", title: "Creative Direction" },
      ],
      music: [
        {
          name: "Akulaleki",
          title: "Samthing Soweto ft. Sasha, Dj Maphorisa, Kabza De Small",
        },
        { name: "Dela Move", title: "Chronixx" },
      ],
    },
    symba: {
      url: "https://youtu.be/ruN9x30kzpQ?si=BCDyIOLGPY0-JU-K",
      title: "TOP G - Music Video for Symba",
      location: "Lagos, Nigeria",
      description: (
        <p className="text-grey-50 text-[14px] lg:text-[16px] mt-4">
          When USA A-list rapper Symba made a brief visit to Nigeria, he wanted
          to capture the essence of his experience in a music video—just 24
          hours before he had to leave the country. Thanks to a connection made
          by one of our Wac creatives, Self Steve, we were called in to make it
          happen. As a stand-by, one-stop creative community, WacPeople
          immediately assembled a top-notch team that delivered exactly what
          Symba envisioned within the tight deadline. <br /> <br />
          This project highlights our ability to respond quickly and efficiently
          to last-minute requests, providing creative solutions that meet the
          highest standards. Whether it's a music video or any other creative
          project, WacPeople is always ready to bring together the right talent,
          resources, and energy to make it happen.
          <br /> <br />
        </p>
      ),
      cast: null,
      crew: [
        { name: "Damilola Bolashodun", title: "Director and Editor" },
        { name: "Yemi Animashaun", title: "Yemi Animashaun" },
        { name: "Fawole Peters", title: "Producer" },
        { name: "Abazee Productions", title: "Cam Tech" },
        { name: "Phalorey Studios", title: "Drone and Photography" },
        { name: "Wacpeople", title: "Production Company" },
        { name: "TalkToAce", title: "Colorist" },
        { name: "Atlantic Records", title: "Client" },
      ],
      music: null,
    },
    beer: {
      url: "https://youtu.be/X3BwXxbY7Pc?si=6tUZSHsWGigprlu9",
      title: "",
      location: "",
      description: (
        <p className="text-grey-50 text-[14px] lg:text-[16px] mt-4">
          "ITA: <strong>The World Outside</strong>" is a dance expression film
          born from the creative energy that was reignited after months of
          isolation. During the pandemic, creatives were cut off from
          collaboration, their passions put on hold. But when the world began to
          open up again, WacPeople seized the moment, inviting available members
          of our community to a spontaneous gathering—what we call a "Wac
          Cruise." With no set direction, we simply brought together the talent
          on hand at a location in Lagos, Nigeria, and from this organic
          link-up, a masterpiece emerged. <br /> <br />
          ITA, named after the Yoruba word for "outside," symbolizes the freedom
          and exuberance that comes with stepping back into the world. The film
          features powerful dance performances, each one a raw expression of joy
          and creativity. These performances, enhanced by spoken words from Maya
          Angelou and set to the music of Samthing Soweto and Chronixx, embody
          the resilience and renewed spirit of our time.
          <br /> <br />
          This project is a testament to the magic that happens when creative
          minds come together, even without a plan. It’s a reflection of how we
          turned a challenging period into an opportunity to reconnect, create,
          and celebrate the world outside.
        </p>
      ),
      cast: [{ name: "", title: "" }],
      crew: null,
      music: null,
    },
  };
  return (
    <div className="mt-4 px-[16px] lg:px-[80px]">
      <div className="h-[544px] w-full rounded-2xl overflow-hidden relative">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/X3BwXxbY7Pc?si=QjpoCgOoqyJ8Y97L&modestbranding=0&controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="mt-[55px]">
        <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase">
          {renderDetails[title as titleprops]?.title}
        </h2>
        <p className="text-grey-50 text-[12px] lg:text-[14px] font-medium uppercase">
          {renderDetails[title as titleprops]?.location}
        </p>
        <p className="text-grey-50 text-[14px] lg:text-[16px] mt-4">
          {renderDetails[title as titleprops]?.description}
        </p>
      </div>

      <div>{/* IMAGES */}</div>
      <div>
        <h2 className="text-white text-[28px] lg:text-[48px] font-semibold uppercase mt-[55px]">
          credits
        </h2>

        {renderDetails[title as titleprops]?.cast && (
          <div className="mb-10">
            <h2 className="flex items-center text-[14px] font-medium text-grey-80 my-3">
              <span className="mr-[6px]">
                <Star />
              </span>{" "}
              Cast
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
              {renderDetails[title as titleprops].cast?.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-[#DFDFDF] text-[16px]">{item.name}</p>
                  <p className="text-[#797C86] text-[16px]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {renderDetails[title as titleprops]?.crew && (
          <div className="mb-10">
            <h2 className="flex items-center text-[14px] font-medium text-grey-80 my-3">
              <span className="mr-[6px]">
                <Star />
              </span>{" "}
              Crew
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
              {renderDetails[title as titleprops].crew?.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-[#DFDFDF] text-[16px]">{item.name}</p>
                  <p className="text-[#797C86] text-[16px]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {renderDetails[title as titleprops]?.music && (
          <div className="mb-10">
            <h2 className="flex items-center text-[14px] font-medium text-grey-80 my-3">
              <span className="mr-[6px]">
                <Star />
              </span>{" "}
              Music
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
              {renderDetails[title as titleprops].music?.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-[#DFDFDF] text-[16px]">{item.name}</p>
                  <p className="text-[#797C86] text-[16px]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <p className="italic text-[12px] text-gray-400 flex justify-end items-center">
        Next read.....
      </p>
      <div className="flex justify-end items-center">
        <button
          onClick={() => router.push(`/projects/${projectRoute[0]}`)}
          className="text-[28px] lg:text-[38px] font-semibold uppercase text-white flex items-center gap-[10px]"
        >
          <p className="text-white ">{projectRoute[0]}</p>
          <span className="cursor-pointer">
            <ArrowBox width="60px" height="50px" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProjectDel;
