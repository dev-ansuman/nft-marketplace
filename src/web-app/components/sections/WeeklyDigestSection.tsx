import Image from "next/image";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

export default function WeeklyDigestSection() {
    return (
        <section className="bg-[#2B2B2B] py-20 px-8">
            <div className="max-w-[1050px] mx-auto bg-[#3B3B3B] rounded-[30px] p-10 lg:p-14 flex flex-col md:flex-row items-center gap-10 lg:gap-20">

                <div className="w-full md:w-1/2 shrink-0">
                    <Image
                        src="/image/category_images/ImagePlaceholder-8.png"
                        alt="Astronaut reading newspaper"
                        height={400}
                        width={425}
                        className="rounded-[20px] object-cover w-full h-auto"
                    />
                </div>

                <div className="flex flex-col gap-10 w-full md:w-1/2">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-semibold text-white leading-tight">
                            Join Our Weekly <br /> Digest
                        </h2>
                        <p className="text-white text-xl font-normal opacity-90 leading-relaxed">
                            Get Exclusive Promotions & Updates <br className="hidden lg:block" /> Straight To Your Inbox.
                        </p>
                    </div>

                    <div className="relative flex flex-col sm:flex-row items-center">
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-full bg-white rounded-[20px] px-5 py-4 h-[60px] text-[#2B2B2B] outline-none placeholder:text-[#2B2B2B]/60"
                        />
                        <Button className="w-full sm:w-auto sm:absolute right-0 bg-[#A259FF] hover:bg-[#8b44e0] rounded-[20px] px-10 h-[60px] flex items-center justify-center gap-3 text-white font-semibold transition-all mt-4 sm:mt-0 hover:scale-[0.97] cursor-pointer">
                            <Mail className="w-5 h-5" />
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
