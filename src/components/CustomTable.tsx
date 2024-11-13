import { ProfileData } from '@/app/page';
import { Table, Tab, TabList, Tabs, TabPanel, tabClasses } from '@mui/joy';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';
import { useState, useEffect, useRef } from 'react';

interface CustomTableProps {
	data: ProfileData[];
}

const CustomTable: React.FC<CustomTableProps> = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [dateFilter, setDateFilter] = useState('');
	const [ageRange, setAgeRange] = useState<[number, number]>([0, 100]);
	const [akgRange, setAkgRange] = useState<[number, number]>([0, 100]);

	const filteredData = data.filter((item) => {
		const matchesName = item.nama?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false;
		const matchesMenu = item.menu?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false;
		const matchesDate = item.tanggal === dateFilter || dateFilter === '';
		const matchesAge = (item.umur ?? 0) >= ageRange[0] && (item.umur ?? 0) <= ageRange[1];
		const matchesAkg = (item.akg ?? 0) >= akgRange[0] && (item.akg ?? 0) <= akgRange[1];
		return matchesName && matchesMenu && matchesDate && matchesAge && matchesAkg;
	});

	return (
		<div className="flex w-full flex-col">
			<div className="flex w-full flex-row space-x-2 text-xs">
				{/* Search bar */}
				<div className="flex w-full flex-col md:w-2/5">
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
				<div className="hidden w-1/5 flex-col md:flex">
					<label className="pb-1">Filter by date</label>
					<input
						type="date"
						value={dateFilter}
						onChange={(e) => setDateFilter(e.target.value)}
						className="w-full rounded-md border border-gray-300 px-3 py-1 text-sm"
					/>
				</div>

				{/* Age Range Filter */}
				<div className="hidden w-[20%] flex-col md:flex">
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
				<div className="hidden w-[20%] flex-col md:flex">
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
						<th className="hidden w-[5%] md:flex">ID</th>
						<th className="hidden md:flex">Tanggal</th>
						<th className="hidden w-[7%] md:flex">Waktu</th>
						<th>Nama</th>
						<th className="hidden w-[10%] md:flex">Umur</th>
						<th className="w-[20%]">Menu</th>
						<th>%AKG Terpenuhi</th>
					</tr>
				</thead>
				<tbody>
					{data.length == 0 && (
						<tr>
							<td
								colSpan={7}
								className="text-center"
							>
								Loading...
							</td>
						</tr>
					)}

					{filteredData.map((item, index) => (
						<tr key={index}>
							<td className="hidden md:flex">{index}</td>
							<td className="hidden md:flex">{item?.tanggal ? new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(new Date(item.tanggal)) : 'segitu'}</td>
							<td className="hidden md:flex">{item?.waktu ? new Date(item.waktu).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : '45:00'}</td>
							<td>{item.nama}</td>
							<td className="hidden md:flex">{item.umur}</td>
							<td>{item?.menu || 'makanan'}</td>
							<td>{item.akg}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default CustomTable;
