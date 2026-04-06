import Image from "next/image";
import { Button } from "../ui/button";

export default function WeeklyDigestSection() {
    return (

        <div className="bg-[#2B2B2B] w-full flex justify-center py-10">
            <div className="flex bg-[#3B3B3B] rounded-3xl overflow-hidden max-w-4xl w-full items-center p-8 lg:p-14 gap-12">
                <div className="hidden md:block shrink-0">
                    <Image
                        src="/image/category_images/ImagePlaceholder-8.png"
                        alt="Digest"
                        height={425}
                        width={310}
                        className="rounded-2xl object-cover"
                    />
                </div>

                <div className="flex flex-col gap-8 flex-1">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-3">Join Our Weekly Digest</h2>
                        <p className="text-white text-lg opacity-80">
                            Get Exclusive Promotions & Updates Straight To Your Inbox.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-[-4]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white rounded-2xl pl-[20px] py-[16px] flex-1 text-black outline-none"
                        />
                        <Button className="bg-[#A259FF] hover:bg-[#8b44e0] rounded-2xl px-8 py-6 h-auto transition-colors transition-transform hover:scale-[0.97]">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}