import Image from 'next/image';
import { IconFingerprintScan, IconSquareRoundedPlus, IconMap2, IconScan, IconPlus, IconMap, IconLifebuoy, IconSettings, IconSettings2, IconSettingsFilled, IconBellRinging, IconUser, IconUserFilled } from '@tabler/icons-react';
import Link from 'next/link';

interface SidebarProps {
	location: string;
}

export default function Sidebar({ location }: SidebarProps) {
	return (
		<div className="fixed flex h-full w-60 flex-col justify-between border border-r border-gray-300 bg-first px-4 py-4 shadow">
			<div className="flex w-full flex-col space-y-4">
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

			<div className="flex w-full flex-col space-y-4 text-sm">
				{/* Menu bar */}
				<div className="flex w-full flex-col space-y-2 text-sm font-semibold">
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
				<div className="h-[1px] w-full rounded-full bg-gray-300" />

				{/* Profile */}
				<div className="border-top-1 w-full">
					<div className="flex flex-row items-center space-x-2">
						<div className="h-9 w-9 rounded-full bg-gray-500 overflow-hidden flex items-center justify-center">
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
