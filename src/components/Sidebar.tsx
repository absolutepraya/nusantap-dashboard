import Image from "next/image";
import { IconFingerprintScan, IconSquareRoundedPlus, IconMap2, IconScan, IconPlus, IconMap, IconLifebuoy, IconSettings, IconSettings2, IconSettingsFilled, IconBellRinging } from '@tabler/icons-react';
import Link from "next/link";

interface SidebarProps {
    location: string;
}

export default function Sidebar({ location }: SidebarProps) {
    return (
        <div className="w-60 h-full bg-first flex flex-col px-4 py-4 justify-between border border-r shadow border-gray-300">
            <div className="flex flex-col space-y-4 w-full">
                {/* Title bar */}
                <div className="flex flex-row space-x-3 items-center">
                    <Image src="/logo.svg" alt="logo" width={34} height={34} />
                    <h1 className="text-xl font-bold">NuSantap</h1>
                </div>

                {/* Search bar */}
                <div className="flex flex-row space-x-2 items-center">
                    <input type="text" className="w-full bg-white rounded-md border shadow px-2 py-1" placeholder="Cari menu" />
                </div>

                {/* Menu bar */}
                <div className="flex flex-col space-y-2 w-full font-semibold text-sm">
                    <Link className={`${location == "/" ? "bg-third" : ""} hover:bg-second rounded-md py-2 px-3 flex justify-start items-center space-x-2`}
                        href="/"
                    >
                        <IconScan size={20} className="text-custgray1 active:text-custgray2"/>
                        <p>Hasil Scan</p>
                    </Link>
                    <Link className={`${location == "create-menu" ? "bg-third" : ""} hover:bg-second rounded-md py-2 px-3 flex justify-start items-center space-x-2`}
                        href="/create-menu"
                    >
                        <IconPlus size={20} className="text-custgray1 active:text-custgray2"/>
                        <p>Buat Menu</p>
                    </Link>
                    <Link className={`${location == "prevalence-map" ? "bg-third" : ""} hover:bg-second rounded-md py-2 px-3 flex justify-start items-center space-x-2`}
                        href="/prevalence-map"
                    >
                        <IconMap size={20} className="text-custgray1 active:text-custgray2"/>
                        <p>Peta Prevalensi</p>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col space-y-4 w-full text-sm">
                {/* Menu bar */}
                <div className="flex flex-col space-y-2 w-full font-semibold text-sm">
                    <button className="hover:bg-second rounded-md py-2 px-3 flex justify-start items-center space-x-2 cursor-not-allowed">
                        <IconBellRinging size={20} className="text-custgray1 active:text-custgray2"/>
                        <p>Notifikasi</p>
                    </button>
                    <button className="hover:bg-second rounded-md py-2 px-3 flex justify-start items-center space-x-2 cursor-not-allowed">
                        <IconLifebuoy size={20} className="text-custgray1 active:text-custgray2"/>
                        <p>Bantuan</p>
                    </button>
                    <button className="active:bg-third hover:bg-second rounded-md py-2 px-3 flex justify-start items-center space-x-2">
                        <IconSettingsFilled size={20} className="text-custgray1 active:text-custgray2"/>
                        <p>Pengaturan</p>
                    </button>
                </div>

                {/* Line */}
                <div className="bg-gray-300 h-[1px] w-full rounded-full"/>

                {/* Profile */}
                <div className="w-full border-top-1">
                    <div className="flex flex-row space-x-2 items-center">
                        <div className="w-9 h-9 bg-gray-500 rounded-full"/>
                        <div className="flex flex-col space-y-0">
                            <p className="font-semibold">Husin Hidayatul</p>
                            <p className="text-gray-600">husin@nusantap.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}