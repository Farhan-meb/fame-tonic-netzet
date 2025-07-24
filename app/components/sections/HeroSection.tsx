import Image from "next/image";
import HeroImage from "../../../public/assets/images/hero-image.webp";
import { HERO_SECTION } from "../../constants/content";
import CTAButton from "../ui/CTAButton";
import FeatureList from "../ui/FeatureList";

const HeroSection = () => {
    return (
        <section className="flex flex-col-reverse xl:flex-row md:flex-col-reverse px-5 sm:p-0">
            <div className="xl:ml-215 xl:mt-57 xl:mb-30 md:mx-auto max-w-516 z-20">
                <div className="mb-22 sm:mb-4">
                    <h1 className="font-urbanist font-extrabold sm:font-bold text-25 xl:text-35 md:text-25px leading-[1.2] w-328 sm:w-full mx-auto tracking-normal align-middle text-center sm:text-left h-60 sm:h-84">
                        {HERO_SECTION.title}
                    </h1>
                    <h2 className="font-urbanist font-extrabold sm:font-bold text-25 xl:text-35 md:text-25 leading-[1.2] w-328 sm:w-full mx-auto tracking-normal align-middle text-center sm:text-left text-shadow-red-glow text-primary h-60 sm:h-84">
                        {HERO_SECTION.subtitle}
                    </h2>
                </div>

                <FeatureList
                    features={HERO_SECTION.features}
                    className="mb-22 sm:mb-30 h-202 sm:h-149"
                />

                <div className="hidden sm:block text-center max-w-313">
                    <CTAButton fullWidth showDescription />
                </div>
            </div>

            <div className="static mt-2.5 xl:mt-0 md:mt-7 sm:mt-2.5 md:mx-auto xl:absolute md:static right-139 top-121 z-10">
                <Image
                    src={HeroImage}
                    width={666}
                    height={679}
                    alt="Hero Image"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default HeroSection;
