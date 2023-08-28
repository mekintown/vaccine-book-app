import Image from "next/image";

type Props = {
    imgSrc: string;
    txt: string;
};

const Card = ({imgSrc, txt} : Props) => {
    return (
        <div className="grid grid-cols-3 min-h-[20vh] bg-gray-100 rounded-2xl p-4 drop-shadow">
            <div className="col-span-2 text-black flex justify-center flex-col">
                <h2 className="text-2xl font-medium tracking-wide">{txt}</h2>
            </div>
            <div className="relative">
                <Image src={imgSrc} alt="hospital" className="object-contain rounded-2xl" fill={true} sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw" />
            </div>
        </div>
    )
}

export default Card;