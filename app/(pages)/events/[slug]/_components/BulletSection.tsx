import GrowatIcon from "./GrowatIcon";

const bulletPoints = [
  {
    icon: "camera",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "calendar",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "clock",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "map-pin",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "phone",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: "mail",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

type BulletPointProps = {
  icon: string;
  text: string;
};

type ResponsiveGridProps = {
  bulletPoints: BulletPointProps[];
};

function BulletPoint({ bulletPoint }: { bulletPoint: BulletPointProps }) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-40 sm:w-50">
      <GrowatIcon
        name={bulletPoint.icon}
        className="w-15 h-15 mb-4 sm:w-20 sm:h-20 sm:mb-6"
      />
      <p className="text-base md:text-xl leading-tight">{bulletPoint.text}</p>
    </div>
  );
}

export default function ResponsiveGrid({ bulletPoints }: ResponsiveGridProps) {
  return (
    <div className="flex w-full items-center justify-center bg-white px-10 lg:px-[5%]">
      <div className="flex flex-wrap justify-center gap-5 sm:gap-10">
        {bulletPoints.map((bulletPoint, index) => (
          <div
            key={index}
            className={`basis-1/3 sm:basis-1/4 flex justify-center`}
          >
            <BulletPoint bulletPoint={bulletPoint} />
          </div>
        ))}
      </div>
    </div>
  );
}

export { bulletPoints };
