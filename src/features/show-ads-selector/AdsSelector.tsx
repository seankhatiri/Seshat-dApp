import Image from "next/image";
import Link from "next/link";

interface AdsSelectorProps {
  title: string;
  link: string;
  ad_url: string;
  handleButtonClick: any;
}

export const AdsSelector: React.FC<AdsSelectorProps> = ({
  title,
  link,
  ad_url,
  handleButtonClick,
}) => {
  const Icon = ({ src = "", alt = "" }) => (
    <Image src={src} alt={alt} width={35} height={35} />
  );

  const Ad = () => <Icon src={ad_url} alt="advertisement" />;

  return (
    <>
      <p className="text-black font-bold">{title}</p>
      <div>
        <Ad />
      </div>

      <div>
        Missions
        <div className="grid w-80 h-20 rounded bg-primary text-primary-content place-content-center">
          <p className="mt-2">Know more about {title} </p>
          <Link href={link} target="_blank">
            <button
              onClick={handleButtonClick}
              className="text-sm my-2 px-5 w-auto h-auto bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            >
              Know more about {title}
            </button>
          </Link>
        </div>
        <div className="grid w-80 h-20 rounded bg-accent text-accent-content place-content-center">
          Twitter:
          <p className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-600 text-white-700 rounded-full">
            Coming Soon
          </p>
        </div>
        <div className="grid w-80 h-20 rounded bg-secondary text-secondary-content place-content-center">
          Cross-chain transaction:
          <p className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-600 text-white-700 rounded-full">
            Coming Soon
          </p>
        </div>
      </div>
    </>
  );
};
