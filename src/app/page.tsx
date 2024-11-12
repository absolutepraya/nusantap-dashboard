/* eslint-disable @next/next/no-img-element */
'use client';
import { IconDownload, IconSearch } from '@tabler/icons-react';
import Sidebar from '@/components/Sidebar';
import { Table, Tab, TabList, Tabs, TabPanel, tabClasses } from '@mui/joy';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import lineChartData from './data/lineChartData';
import LineChart from '@/components/LineChart';
import dummyTableData from './data/dummyTableData';
import CustomTable from '@/components/CustomTable';

export default function Home() {
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
					defaultValue={0}
					sx={{ bgcolor: 'transparent' }}
				>
					<div className="flex w-full justify-center"></div>
					<TabList
						disableUnderline
						sx={{
							p: 0.5,
							gap: 0.5,
							borderRadius: 'xl',
							bgcolor: 'background.level1',
							justifyContent: 'center',
							width: 'fit-content',
							boxShadow: 'sm',
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

					<TabPanel
						value={0}
						sx={{
							p: 0,
							pt: 3,
						}}
					>
						<LineChart
							lineChartData={lineChartData}
							height="400px "
						/>
					</TabPanel>

					<TabPanel
						value={1}
						sx={{
							p: 0,
							pt: 3,
						}}
					>
						<LineChart lineChartData={lineChartData} />
					</TabPanel>

					<TabPanel
						value={2}
						sx={{
							p: 0,
							pt: 3,
						}}
					>
						<CustomTable data={dummyTableData} />
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
}
