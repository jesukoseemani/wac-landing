import Image from "next/image";
import React from "react";

const AboutCompany = () => {
  const data = [
    { amount: "15+", content: "Years in Business" },
    { amount: "500+", content: "Happy Clients" },
    { amount: "10+", content: "Event Hosted" },
    { amount: "05+", content: "International Client" },
    { amount: "10,000+", content: "Social Media Followers" },
    { amount: "90%", content: "Client Retention Rate" },
  ];
  return (
    <div className="mt-[60px] px-[16px] lg:px-[80px]">
      <div className="flex flex-col">
        <h3 className="text-grey-50 text-sm lg:text-base uppercase">About</h3>
        <h1 className="text-white font-semibold uppercase text-[28px] lg:text-[48px]">
          wac company
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 my-6">
        {data.map((item, index) => (
          <div
            className="py-5 px-6 rounded-xl bg-dark-6 border border-solid border-dark-12"
            key={index}
          >
            <p className="text-white text-[28px] lg:text-[34px] font-semibold uppercase">
              {item.amount}
            </p>
            <p className="text-grey-50 text-sm">{item.content}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <Image
          src="/images/Union.png"
          width={1280}
          height={512}
          quality={100}
          objectFit="cover"
          alt="wallpaper"
        />
      </div>
      <div className="py-[40px] lg:py-[60px] border-y border-solid border-dark-12">
        <h2 className="text-grey-50 text-[24px] lg:text-[34px] font-semibold uppercase">
          OUR STORY
        </h2>
        <p className="text-grey-50 text-base my-[20px] lg:my-[30px]">
          Lorem ipsum dolor sit amet consectetur. Elementum sit vestibulum fusce
          ipsum massa faucibus quam. Imperdiet mauris sit leo diam ipsum. In
          augue non risus pellentesque feugiat odio. Eget consectetur id eget
          facilisis viverra aliquam ut convallis ultrices. Sed id ultrices sem
          blandit in neque. Fringilla nunc sit est nunc ipsum vel eleifend
          vulputate. Egestas sem eget facilisis auctor cras auctor. Ut aliquet
          sodales donec varius ante sollicitudin faucibus. Mi sollicitudin
          feugiat eu gravida justo magna aliquet dictumst purus. Leo at mauris
          nibh vel id aliquam hac. Diam et vitae arcu vitae viverra vitae arcu
          nam. Ornare vel est eu ullamcorper hac odio turpis mauris proin.
          Ligula est ultricies varius.
        </p>
        <p className="text-grey-50 text-base">
          Lorem ipsum dolor sit amet consectetur. Venenatis velit ut tincidunt
          cras at metus amet aliquet elementum. Vitae sed lectus eget sed
          pretium lacus nulla. Quis ullamcorper mattis cursus varius fermentum
          varius sollicitudin nisl. Scelerisque vitae fermentum eget tortor
          pharetra posuere etiam sed interdum. Ultrices non ut at augue neque
          sed. Purus mattis feugiat eget massa. Eu nibh et mauris quisque
          faucibus molestie placerat. Nam condimentum magnis in a in. Metus
          risus sodales pellentesque vulputate risus gravida enim tristique
          pretium. Ac quis ac varius sit bibendum quam at. Nam sapien
          scelerisque diam aenean commodo. Neque dictum mollis imperdiet fusce
          est. Sagittis ut nunc quis rhoncus eu lorem et eget orci. Tellus
          dictum aliquam vel a in. Feugiat posuere arcu congue ut non. Congue
          pharetra malesuada id eu.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
