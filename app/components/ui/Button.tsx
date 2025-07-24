import Image from "next/image";
import RightArrow from "../../../public/assets/svg/right-arrow.svg";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
    showArrow?: boolean;
    fullWidth?: boolean;
}

const Button = ({
    children,
    onClick,
    className = "",
    variant = "secondary",
    showArrow = true,
    fullWidth = false,
}: ButtonProps) => {
    const baseClasses =
        "flex items-center justify-center gap-2.5 rounded-10 shadow-cyan-glow font-figtree text-xl leading-[100%] font-bold tracking-normal py-2";
    const variantClasses =
        variant === "secondary" ? "bg-secondary" : "bg-primary";
    const widthClasses = fullWidth ? "w-full" : "";

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${widthClasses} ${className}`}
            onClick={onClick}
        >
            <span>{children}</span>
            {showArrow && (
                <Image
                    src={RightArrow}
                    width={11}
                    height={6}
                    alt="right arrow"
                />
            )}
        </button>
    );
};

export default Button;
