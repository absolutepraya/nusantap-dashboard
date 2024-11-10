import Image from "next/image";
import { IconFingerprintScan, IconSquareRoundedPlus, IconMap2, IconScan, IconPlus, IconMap, IconLifebuoy, IconSettings, IconSettings2, IconSettingsFilled, IconBellRinging } from '@tabler/icons-react';
import Sidebar from "@/components/Sidebar";

export default function CreateMenu() {
	return (
		<div className="bg-white flex flex-row w-screen h-screen">
			<Sidebar location="create-menu"/>
		</div>
	);
}
