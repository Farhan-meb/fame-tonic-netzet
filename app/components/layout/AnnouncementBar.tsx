const AnnouncementBar = () => {
    return (
        <div className="bg-[linear-gradient(90deg,rgba(252,0,78,1)_0%,rgba(16,203,224,1)_100%)] lg:h-46 md:h-71 h-76 flex justify-center items-center px-7 sm:px-0">
            <div className="w-auto sm:w-882 mx-auto text-center font-figtree sm:pt-2.5 sm:pb-11">
                <span className="font-extrabold tracking-normal text-base leading-3.5 sm:text-22 sm:leading-22px uppercase text-cyan">
                    🚀 FRESH BEGINNINGS SALE:
                </span>
                <span className="text-base leading-4 sm:text-22 sm:leading-22 font-semibold">
                    &nbsp;
                </span>
                <span className="font-semibold leading-3.5 text-sm sm:text-22 sm:leading-22">
                    Extra 25% OFF, Limited Spots - start your journey today!
                </span>
            </div>
        </div>
    );
};

export default AnnouncementBar;
