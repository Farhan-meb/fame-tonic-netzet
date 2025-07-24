import { LEGAL_DISCLAIMER } from "../../constants/content";
import CTAButton from "../ui/CTAButton";

const LegalDisclaimer = () => {
    return (
        <div className="px-5 sm:px-0 pb-10 sm:pb-0">
            <div className="space-y-3 my-7 lg:mb-9 lg:mt-0 sm:mb-82 lg:ml-215 max-w-281 mx-auto text-center sm:text-left sm:max-w-516 z-30 relative">
                <p className="h-7 font-figtree font-medium text-xs leading-[1.2] tracking-normal align-middle text-gray">
                    {LEGAL_DISCLAIMER.legal}
                </p>
                <p className="text-gray h-3 font-figtree font-medium text-10 leading-[100%] tracking-normal align-middle">
                    {LEGAL_DISCLAIMER.copyright}
                </p>
            </div>
            <div className="block md:hidden text-center px-5">
                <CTAButton fullWidth showDescription className="mb-2.5" />
            </div>
        </div>
    );
};

export default LegalDisclaimer;
