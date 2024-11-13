/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { IconScan, IconPlus, IconMap, IconLifebuoy, IconSettingsFilled, IconBellRinging, IconSparkles, IconSwitchHorizontal, IconQrcode } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import { useProfileState } from '@/stores/globalState';

interface SidebarProps {
	location: string;
}

export default function Sidebar({ location }: SidebarProps) {
	const [changeProfileDialog, setChangeProfileDialog] = useState(false);
	const { profileIndex, setProfileIndex } = useProfileState();

	return (
		<div className="fixed z-50 md:flex hidden h-full w-60 flex-col justify-between border border-r border-gray-300 bg-first pt-4 shadow">
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
						className={`${location == 'generate-menu' ? 'bg-third' : 'hover:bg-second'} flex items-center justify-start space-x-2 rounded-md px-3 py-2`}
						href="/generate-menu"
					>
						<IconSparkles
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Generate Menu</p>
					</Link>
					<Link
						className={`${location == 'prevalence-map' ? 'bg-third' : 'hover:bg-second'} flex items-center justify-start space-x-2 rounded-md px-3 py-2`}
						href={profileIndex == 0 ? '/prevalence-map/jabar' : '/prevalence-map/ntt'}
					>
						<IconMap
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Peta Prevalensi</p>
					</Link>
					<Link
						className={`${location == 'qr' ? 'bg-third' : 'hover:bg-second'} flex items-center justify-start space-x-2 rounded-md px-3 py-2`}
						href={profileIndex == 0 ? '/qr?p1=false' : '/qr?p1=true'}
					>
						<IconQrcode
							size={20}
							className="text-custgray1 active:text-custgray2"
						/>
						<p>Scan QR Code</p>
					</Link>
				</div>
			</div>

			<div className="flex w-full flex-col text-sm">
				{/* Menu bar */}
				<div className="mb-4 flex w-full flex-col space-y-2 px-4 text-sm font-semibold">
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

				{/* Change profile */}
				{changeProfileDialog && (
					<div className="absolute bottom-[5.5rem] left-4 flex w-64 flex-col space-y-2 rounded-lg border bg-second px-4 py-3 shadow">
						<div className="flex flex-row items-center space-x-2">
							<div className="flex h-5 w-5 items-center justify-center rounded bg-custblue text-white">
								<IconSwitchHorizontal size={14} />
							</div>
							<p className="text-base font-bold">Ganti Profil Admin</p>
						</div>

						{/* Profil 1 */}
						<div
							className={`flex w-full cursor-pointer flex-row items-center space-x-2 rounded-lg border-[2.5px] bg-white py-2 pl-2 ${profileIndex == 0 ? 'border-custblue shadow-lg' : 'border-gray-300'}`}
							onClick={() => {
								setProfileIndex(0);
								setChangeProfileDialog(false);
							}}
						>
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

						{/* Profil 2 */}
						<div
							className={`flex w-full cursor-pointer flex-row items-center space-x-2 rounded-lg border-[2.5px] bg-white py-2 pl-2 ${profileIndex == 1 ? 'border-custblue shadow-lg' : 'border-gray-300'}`}
							onClick={() => {
								setProfileIndex(1);
								setChangeProfileDialog(false);
							}}
						>
							<div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gray-500">
								<Image
									src="/images/pfp2.jpg"
									alt="PFP"
									width={36}
									height={36}
									className="rounded-full"
								/>
							</div>
							<div className="flex flex-col space-y-0">
								<p className="font-semibold">Anwar S. (NTT)</p>
								<p className="text-gray-600">anwar.ntt@nusantap.id</p>
							</div>
						</div>

						<div className="flex h-8 w-full flex-row space-x-2">
							<div className="justify-cenyer flex h-full w-1/2 cursor-not-allowed items-center justify-center rounded-lg bg-custblue text-white">
								<p>Tambah Profil</p>
							</div>
							<div className="justify-cenyer flex h-full w-1/2 cursor-not-allowed items-center justify-center rounded-lg bg-custblue text-white">
								<p>Edit Profil</p>
							</div>
						</div>
					</div>
				)}

				{/* Profile */}
				<div
					className="border-top-1 relative flex w-full cursor-pointer select-none py-4 pl-4 hover:bg-second active:bg-third"
					onClick={() => setChangeProfileDialog(!changeProfileDialog)}
				>
					<div className="flex flex-row items-center space-x-2">
						<div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-500">
							<div className="absolute -left-1 -top-1 flex h-4 w-4 items-center justify-center rounded bg-custblue text-white">
								<IconSwitchHorizontal size={12} />
							</div>
							<Image
								src={profileIndex == 0 ? '/images/pfp.jpg' : '/images/pfp2.jpg'}
								alt="PFP"
								width={36}
								height={36}
								className="rounded-full"
							/>
						</div>
						<div className="flex flex-col space-y-0">
							<p className="font-semibold">{profileIndex == 0 ? 'Daffa A. (Jawa Barat)' : 'Anwar S. (NTT)'}</p>
							<p className="text-gray-600">{profileIndex == 0 ? 'daffa.jabar@nusantap.id' : 'anwar.ntt@nusantap.id'}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
