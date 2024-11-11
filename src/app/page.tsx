'use client';
import Image from 'next/image';
import { IconDownload, IconSearch } from '@tabler/icons-react';
import Sidebar from '@/components/Sidebar';
import { Table, Tab, TabList, Tabs, TabPanel, tabClasses, Box, Typography, Sheet, Checkbox, FormControl, FormLabel, IconButton, Link, Tooltip, Select, Option } from '@mui/joy';
import { useState } from 'react';
import React from 'react';
// import { Pagination, TablePagination } from '@mui/material';

const data = [
	{
		id: 1,
		nama: 'Aisyah Putri',
		tanggal: '2024-10-03',
		waktu: '10:30',
		umur: 5,
		menu: 'Nasi Liwet',
		akg: 60,
	},
	{
		id: 2,
		nama: 'Budi Santoso',
		tanggal: '2024-10-05',
		waktu: '11:15',
		umur: 7,
		menu: 'Sate Maranggi',
		akg: 80,
	},
	{
		id: 3,
		nama: 'Citra Sari',
		tanggal: '2024-10-07',
		waktu: '12:00',
		umur: 4,
		menu: 'Mie Kocok',
		akg: 50,
	},
	{
		id: 4,
		nama: 'Dika Pratama',
		tanggal: '2024-10-09',
		waktu: '13:45',
		umur: 6,
		menu: 'Batagor',
		akg: 70,
	},
	{
		id: 5,
		nama: 'Eka Rahma',
		tanggal: '2024-10-11',
		waktu: '10:20',
		umur: 3,
		menu: 'Tahu Sumedang',
		akg: 65,
	},
	{
		id: 6,
		nama: 'Fajar Nugroho',
		tanggal: '2024-10-13',
		waktu: '11:50',
		umur: 8,
		menu: 'Karedok',
		akg: 75,
	},
	{
		id: 7,
		nama: 'Gita Lestari',
		tanggal: '2024-10-15',
		waktu: '12:30',
		umur: 9,
		menu: 'Soto Bandung',
		akg: 85,
	},
	{
		id: 8,
		nama: 'Hendra Wijaya',
		tanggal: '2024-10-17',
		waktu: '13:10',
		umur: 10,
		menu: 'Pepes Ikan',
		akg: 90,
	},
	{
		id: 9,
		nama: 'Indah Permata',
		tanggal: '2024-10-19',
		waktu: '10:45',
		umur: 5,
		menu: 'Lotek',
		akg: 55,
	},
	{
		id: 10,
		nama: 'Jaya Kurnia',
		tanggal: '2024-10-21',
		waktu: '11:30',
		umur: 7,
		menu: 'Sayur Asem',
		akg: 60,
	},
	{
		id: 11,
		nama: 'Kiki Ramadhani',
		tanggal: '2024-10-23',
		waktu: '12:15',
		umur: 4,
		menu: 'Cindrel',
		akg: 70,
	},
	{
		id: 12,
		nama: 'Lintang Suryani',
		tanggal: '2024-10-25',
		waktu: '13:35',
		umur: 6,
		menu: 'Serabi',
		akg: 75,
	},
	{
		id: 13,
		nama: 'Mira Ayu',
		tanggal: '2024-10-27',
		waktu: '10:10',
		umur: 3,
		menu: 'Cireng',
		akg: 65,
	},
	{
		id: 14,
		nama: 'Nanda Prasetya',
		tanggal: '2024-10-29',
		waktu: '11:55',
		umur: 8,
		menu: 'Tahu Sumedang',
		akg: 80,
	},
	{
		id: 15,
		nama: 'Putri Maharani',
		tanggal: '2024-10-31',
		waktu: '12:40',
		umur: 9,
		menu: 'Sate Maranggi',
		akg: 85,
	}
];

export default function Home() {
	const [searchTerm, setSearchTerm] = useState('');
	const [dateFilter, setDateFilter] = useState('');
	const [ageRange, setAgeRange] = useState<[number, number]>([0, 100]);
	const [akgRange, setAkgRange] = useState<[number, number]>([0, 100]);

	const filteredData = data.filter((item) => {
		const matchesSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase()) || item.menu.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesDate = dateFilter ? item.tanggal === dateFilter : true;

		const matchesAge = item.umur >= ageRange[0] && item.umur <= ageRange[1];

		const matchesAkg = item.akg >= akgRange[0] && item.akg <= akgRange[1];

		return matchesSearch && matchesDate && matchesAge && matchesAkg;
	});

	return (
		<div className="flex h-full w-full flex-row bg-white">
			<Sidebar location="/" />

			{/* Main content */}
			<div className="ml-60 flex h-full w-full flex-col space-y-6 px-10 py-8">
				<div className="flex w-full flex-row items-center justify-between">
					<p className="text-lg font-semibold text-custgray1">
						Selamat datang, Admin <span className="font-bold text-custblue">Jawa Barat</span> 👋🏻
					</p>
					<button className="flex flex-row items-center rounded-md bg-custblue px-3 py-[6px] pr-3 text-sm font-semibold text-white hover:bg-[#3156a3] active:bg-[#1f3e7d]">
						<IconDownload
							size={16}
							stroke={2.5}
							className="mr-2"
						/>
						<p>Download PDF</p>
					</button>
				</div>

				<div className="flex w-full flex-row items-center justify-between">
					<p className="text-3xl font-bold">Hasil Scan</p>
					<p className="text-sm text-custgray1">Last updated: 12/11/2024 - 13.30 WIB</p>
				</div>

				<Tabs
					aria-label="tabs"
					defaultValue={2}
					sx={{ bgcolor: 'transparent' }}
				>
					<TabList
						disableUnderline
						sx={{
							p: 0.5,
							gap: 0.5,
							borderRadius: 'md',
							bgcolor: 'background.level1',
							justifyContent: 'center',
							[`& .${tabClasses.root}[aria-selected="true"]`]: {
								boxShadow: 'sm',
								bgcolor: 'background.surface',
							},
						}}
					>
						<Tab disableIndicator>Tab Utama</Tab>
						<Tab disableIndicator>Tab Grafik</Tab>
						<Tab disableIndicator>Tab Tabel</Tab>
					</TabList>

					<TabPanel value={0}>
						<p>Tab Utama</p>
					</TabPanel>

					<TabPanel value={1}>
						<p>Tab Grafik</p>
					</TabPanel>

					<TabPanel
						value={2}
						sx={{
							p: 0,
							pt: 4,
						}}
					>
						<div className="flex w-full flex-row space-x-2 text-xs">
							{/* Search bar */}
							<div className="flex w-2/5 flex-col">
								<p className="pb-1">Cari nama atau menu</p>
								<div className="relative mb-4">
									<IconSearch
										size={14}
										className="absolute bottom-1/2 left-2 translate-y-1/2 text-custgray1"
									/>
									<input
										type="text"
										placeholder="Cari..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="w-full rounded-md border border-gray-300 px-3 py-1 pl-7 text-sm"
									/>
								</div>
							</div>

							{/* Date Filter */}
							<div className="flex w-1/5 flex-col">
								<label className="pb-1">Filter by date</label>
								<input
									type="date"
									value={dateFilter}
									onChange={(e) => setDateFilter(e.target.value)}
									className="w-full rounded-md border border-gray-300 px-3 py-1 text-sm"
								/>
							</div>

							{/* Age Range Filter */}
							<div className="flex w-[20%] flex-col">
								<label className="pb-1">Filter by age range</label>
								<div className="flex space-x-2">
									<input
										type="number"
										placeholder="Min"
										value={ageRange[0]}
										onChange={(e) => setAgeRange([Number(e.target.value), ageRange[1]])}
										className="w-1/2 rounded-md border border-gray-300 px-3 py-1 text-sm"
									/>
									<input
										type="number"
										placeholder="Max"
										value={ageRange[1]}
										onChange={(e) => setAgeRange([ageRange[0], Number(e.target.value)])}
										className="w-1/2 rounded-md border border-gray-300 px-3 py-1 text-sm"
									/>
								</div>
							</div>

							{/* %AKG Range Filter */}
							<div className="flex w-[20%] flex-col">
								<label className="pb-1">Filter by %AKG range</label>
								<div className="flex space-x-2">
									<input
										type="number"
										placeholder="Min"
										value={akgRange[0]}
										onChange={(e) => setAkgRange([Number(e.target.value), akgRange[1]])}
										className="w-1/2 rounded-md border border-gray-300 px-3 py-1 text-sm"
									/>
									<input
										type="number"
										placeholder="Max"
										value={akgRange[1]}
										onChange={(e) => setAkgRange([akgRange[0], Number(e.target.value)])}
										className="w-1/2 rounded-md border border-gray-300 px-3 py-1 text-sm"
									/>
								</div>
							</div>
						</div>

						<Table
							borderAxis="xBetween"
							stickyFooter={false}
							stickyHeader
							sx={{
								border: '2px solid',
								borderColor: '#e5e7eb',
								borderRadius: 'md',
								overflow: 'hidden',
							}}
						>
							<thead>
								<tr>
									<th>ID</th>
									<th>Tanggal</th>
									<th>Waktu</th>
									<th>Nama</th>
									<th>Umur</th>
									<th>Menu</th>
									<th>%AKG Terpenuhi</th>
								</tr>
							</thead>
							<tbody>
								{filteredData.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.tanggal}</td>
										<td>{item.waktu}</td>
										<td>{item.nama}</td>
										<td>{item.umur}</td>
										<td>{item.menu}</td>
										<td>{item.akg}%</td>
									</tr>
								))}
							</tbody>
						</Table>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
}
