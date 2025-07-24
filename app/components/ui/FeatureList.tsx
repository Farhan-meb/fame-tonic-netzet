import Image from "next/image";
import StarIcon from "../../../public/assets/images/star-icon.webp";

interface FeatureListProps {
    features: readonly string[];
    className?: string;
}

const FeatureList = ({ features, className = "" }: FeatureListProps) => {
    return (
        <ul className={`space-y-13 ${className}`}>
            {features.map((feature, index) => (
                <li
                    key={index}
                    className="font-figtree font-semibold text-base leading-22 tracking-normal align-middle flex items-center gap-2.5"
                >
                    <Image
                        src={StarIcon}
                        width={22}
                        height={22}
                        alt="feature icon"
                    />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    );
};

export default FeatureList;
