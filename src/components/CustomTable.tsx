import { Table, Tab, TabList, Tabs, TabPanel, tabClasses } from '@mui/joy';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

interface DataItem {
	id: number;
	nama: string;
	tanggal: string;
	waktu: string;
	umur: number;
	menu: string;
	akg: number;
}

interface CustomTableProps {
	data: DataItem[];
}

export default function CustomTable({ data }: CustomTableProps) {
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
		<div className="flex w-full flex-col">
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
		</div>
	);
}