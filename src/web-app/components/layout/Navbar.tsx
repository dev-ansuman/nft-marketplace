'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="text-white bg-[#2B2B2B] pl-[50px] pr-[50px] pt-[20px] pb-[20px] font-bold">
            <nav className="mx-auto flex items-center justify-between">

                <Link href="/" className="text-[22px] tracking-tighter flex gap-3 font-space">
                    <Image src='/logo.svg' alt='logo' width={32} height={32} />
                    NFT Marketplace
                </Link>

                <div className="hidden md:flex items-center justify-end gap-[10px] relative w-fit h-auto">
                    <>
                        <Button
                            className="tracking-wide pl-[20px] pr-[20px] font-bold text-[15px] bg-transparent transition-transform hover:scale-[0.97] cursor-pointer">
                            Marketplace
                        </Button>
                        <Button
                            className="tracking-wide pl-[20px] pr-[20px] font-bold text-[15px] bg-transparent transition-transform hover:scale-[0.97] cursor-pointer"
                        >
                            Rankings
                        </Button>
                        <Button
                            className="tracking-wide pl-[20px] pr-[20px] font-bold text-[15px] bg-transparent transition-transform hover:scale-[0.97] cursor-pointer"
                        >
                            Connect a wallet
                        </Button>
                        <Button
                            size="lg"
                            className="bg-[#A259FF] tracking-wide pr-[30px] pl-[30px] pt-[10px] pb-[10px] flex gap-3 h-15 rounded-3xl font-bold text-[15px] transition-transform hover:scale-[0.97] cursor-pointer"
                        >
                            <Image src="/icons/button_icons/User.svg" alt='user' height={20} width={20} />
                            Sign Up
                        </Button>
                    </>
                </div>

                <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {open && (
                <div className="md:hidden border-t border-black bg-white">
                    <ul className="flex flex-col">
                        <li className="p-4 flex gap-3">
                            <>
                                <Button variant="outline" className="w-full text-sm tracking-wide">
                                    Marketplace
                                </Button>
                                <Button
                                    variant="outline" className="flex-1 bg-black text-white text-sm tracking-wide"
                                >
                                    Rankings
                                </Button>
                                <Button
                                    variant="outline" className="flex-1 bg-black text-white text-sm tracking-wide"
                                >
                                    Connect a wallet
                                </Button>
                                <Button
                                    className="flex-1 bg-black text-white text-sm tracking-wide"
                                >
                                    Sign Up
                                </Button>
                            </>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}