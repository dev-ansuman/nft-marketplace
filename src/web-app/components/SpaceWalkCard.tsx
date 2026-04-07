const image = '/image/category_images/ImagePlaceholder-12.png';
const avatar = '/avatars/Avatar-14.svg';

const SpaceWalkCard = () => {
    return (
        <div className="w-[330px] bg-[#3B3B3B] rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-[0.97] cursor-pointer shadow-xl">

            <div className="relative h-[310px] w-full">
                <img
                    src={image}
                    alt="Space Walking Artwork"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-[20px_30px_25px_30px] flex flex-col gap-[10px]">
                <h3 className="text-white text-[22px] font-semibold font-mono tracking-wide leading-[1.4]">
                    Space Walking
                </h3>

                <div className="flex items-center gap-[12px]">
                    <div className="w-[24px] h-[24px] rounded-full overflow-hidden border border-[#A259FF]">
                        <img
                            src={avatar}
                            alt="Animakid"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-white text-[16px] font-mono opacity-90">
                        Animakid
                    </span>
                </div>
            </div>

        </div>
    );
};

export default SpaceWalkCard;
