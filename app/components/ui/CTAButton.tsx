import Image from "next/image";
import RightArrow from "../../../public/assets/svg/right-arrow.svg";

interface CTAButtonProps {
    onClick?: () => void;
    className?: string;
    fullWidth?: boolean;
    showDescription?: boolean;
}

const CTAButton = ({
    onClick,
    className = "",
    fullWidth = false,
    showDescription = false,
}: CTAButtonProps) => {
    return (
        <div className={className}>
            <button
                className={`flex items-center justify-center gap-2.5 rounded-10 shadow-cyan-glow bg-secondary font-figtree text-xl leading-[100%] font-bold tracking-normal py-2.5 mb-1.5 cursor-pointer ${
                    fullWidth ? "w-full" : ""
                }`}
                onClick={onClick}
            >
                <span>GET STARTED</span>
                <Image
                    src={RightArrow}
                    width={11}
                    height={6}
                    alt="right arrow"
                    className="h-auto"
                />
            </button>
            {showDescription && (
                <small className="text-xs leading-4 font-figtree">
                    1-minute quiz for personalized Insights
                </small>
            )}
        </div>
    );
};

export default CTAButton;
