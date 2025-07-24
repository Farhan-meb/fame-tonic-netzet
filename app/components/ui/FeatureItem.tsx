import Image from "next/image";
import StarIcon from "../../../public/assets/images/star-icon.webp";

interface FeatureItemProps {
    text: string;
    icon?: any;
}

const FeatureItem = ({ text, icon = StarIcon }: FeatureItemProps) => {
    return (
        <li className="font-figtree font-semibold text-base leading-22 tracking-normal align-middle flex items-center gap-2.5">
            <Image src={icon} width={22} height={22} alt="feature icon" />
            <span>{text}</span>
        </li>
    );
};

export default FeatureItem;
