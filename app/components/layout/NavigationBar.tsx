"use client";
import Image from "next/image";
import Link from "next/link";
import CrossIcon from "../../../public/assets/svg/cross-icon.svg";
import HamburgerIcon from "../../../public/assets/svg/hamburger-icon.svg";
import Logo from "../../../public/assets/svg/logo.svg";
import { NAVIGATION } from "../../constants/content";
import { useNavigation } from "../../hooks/useNavigation";

const NavigationBar = () => {
    const { isMenuOpen, toggleMenu } = useNavigation();

    return (
        <nav className="relative">
            <div className="flex justify-between lg:items-start md:items-center items-center px-0 sm:px-6 md:px-8 lg:px-211 mt-35 relative z-30">
                <div className="w-6 h-6 lg:hidden"></div>

                {/* Centered Logo */}
                <Link
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
                >
                    <Image
                        src={Logo}
                        width={173.12}
                        height={74}
                        alt="Fame Tonic Logo"
                        className="w-32 md:w-auto h-auto"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-12 font-figtree text-lg leading-none font-semibold text-gray">
                    {NAVIGATION.items.map((item) => (
                        <li
                            key={item.label}
                            className="cursor-pointer hover:text-gray-200 transition-colors duration-200"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="lg:hidden relative w-6 h-6 mr-29"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    <div className="relative w-6 h-6 transition-opacity duration-300">
                        <Image
                            src={HamburgerIcon}
                            width={24}
                            height={24}
                            alt="menu"
                            className={`absolute top-0 left-0 transition-all duration-300 ${
                                isMenuOpen
                                    ? "opacity-0 rotate-90"
                                    : "opacity-100 rotate-0"
                            }`}
                        />
                        <Image
                            src={CrossIcon}
                            width={24}
                            height={24}
                            alt="close"
                            className={`absolute top-0 left-0 transition-all duration-300 ${
                                isMenuOpen
                                    ? "opacity-100 rotate-0"
                                    : "opacity-0 -rotate-90"
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50 mt-7 ${
                    isMenuOpen
                        ? "max-h-[200px] opacity-100"
                        : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-4 font-figtree text-lg font-semibold text-gray p-4 items-center">
                    {NAVIGATION.items.map((item) => (
                        <li
                            key={item.label}
                            className="cursor-pointer hover:underline transition-colors duration-200 transform"
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavigationBar;
