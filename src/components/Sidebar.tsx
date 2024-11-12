/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { IconScan, IconPlus, IconMap, IconLifebuoy, IconSettingsFilled, IconBellRinging } from '@tabler/icons-react';
import Link from 'next/link';

interface SidebarProps {
	location: string;
}

export default function Sidebar({ location }: SidebarProps) {
	return (
		<div className="fixed flex h-full w-60 flex-col justify-between border border-r border-gray-300 bg-first pt-4 shadow">
			{/* <img
				src="/elements/sidebarbg.svg"
				alt="Background"
				className="absolute top-0 left-0 w-full h-full object-cover -z-10"
			/> */}

			<div className="flex w-full flex-col space-y-4 px-4">
				{/* Title bar */}
				<div className="flex flex-row items-center space-x-3">
					<Image
						src="/logo.svg"
						alt="logo"
						width={34}
						height={34}
					/>
					<h1 className="text-xl font-bold">NuSantap</h1>
				</div>

				{/* Search bar */}
				<div className="flex flex-row items-center space-x-2">
					<input
						type="text"
						className="w-full rounded-md border bg-white px-2 py-1 shadow"
						placeholder="Cari menu"
					/>
				</div>

				{/* Menu bar */}
				<div className="flex w-full flex-col space-y-2 text-sm font-semibold">
					<Link
						className={`${location == '/' ? 'bg-third' : 'hover:bg-second'} flex items-center justify-start space-x-2 rounded-md px-3 py-2`}
						href="/"
					>
						<IconScan
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Hasil Scan</p>
					</Link>
					<Link
						className={`${location == 'create-menu' ? 'bg-third' : 'hover:bg-second'} flex items-center justify-start space-x-2 rounded-md px-3 py-2`}
						href="/create-menu"
					>
						<IconPlus
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Buat Menu</p>
					</Link>
					<Link
						className={`${location == 'prevalence-map' ? 'bg-third' : 'hover:bg-second'} flex items-center justify-start space-x-2 rounded-md px-3 py-2`}
						href="/prevalence-map"
					>
						<IconMap
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Peta Prevalensi</p>
					</Link>
				</div>
			</div>

			<div className="flex w-full flex-col text-sm">
				{/* Menu bar */}
				<div className="flex w-full flex-col space-y-2 px-4 text-sm font-semibold mb-4">
					<button className="flex cursor-not-allowed items-center justify-start space-x-2 rounded-md px-3 py-2 hover:bg-second">
						<IconBellRinging
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Notifikasi</p>
					</button>
					<button className="flex cursor-not-allowed items-center justify-start space-x-2 rounded-md px-3 py-2 hover:bg-second">
						<IconLifebuoy
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Bantuan</p>
					</button>
					<button className="flex cursor-not-allowed items-center justify-start space-x-2 rounded-md px-3 py-2 hover:bg-second">
						<IconSettingsFilled
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Pengaturan</p>
					</button>
				</div>

				{/* Line */}
				<div className="w-full px-4">
					<div className="h-[1px] w-full rounded-full bg-gray-300" />
				</div>

				{/* Profile */}
				<div className="border-top-1 w-full hover:bg-second flex justify-center py-4 cursor-pointer select-none active:bg-third">
					<div className="flex flex-row items-center space-x-2">
						<div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gray-500">
							<Image
								src="/images/pfp.jpg"
								alt="PFP"
								width={36}
								height={36}
								className="rounded-full"
							/>
						</div>
						<div className="flex flex-col space-y-0">
							<p className="font-semibold">Daffa A. (Jawa Barat)</p>
							<p className="text-gray-600">daffa.jabar@nusantap.id</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
