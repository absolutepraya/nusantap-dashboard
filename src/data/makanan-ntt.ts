export interface MenuItem {
	id: number;
	nama: string;
	harga_total: string;
	nutrisi: string;
	image_url?: string;
	bahan_pokok: BahanPokok[];
	deskripsi: string;
	sayur: string;
	buah: string;
}

export interface BahanPokok {
	nama_bahan: string;
	jumlah: number;
}

export const makananNTT: MenuItem[] = [
	{
		id: 1,
		nama: 'Jagung Bose dengan Ikan Kuah Asam dan Pepaya',
		harga_total: '16000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 55 gr, Protein: 20 gr, Lemak: 8 gr, Vitamin C: 40 mg',
		image_url: 'https://th.bing.com/th/id/OIP.abc123_example_img.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Jagung Putih',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Ikan Segar',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Tomat',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Jeruk Nipis',
				jumlah: 0.02,
			},
		],
		sayur: 'Daun Singkong',
		buah: 'Pepaya',
		deskripsi: 'Jagung bose khas NTT disajikan dengan ikan kuah asam segar dan potongan pepaya manis.',
	},
	{
		id: 2,
		nama: 'Nasi Jagung dengan Ayam Rica-Rica dan Timun',
		harga_total: '15000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 60 gr, Protein: 18 gr, Lemak: 12 gr, Vitamin A: 25 mg',
		image_url: 'https://th.bing.com/th/id/OIP.def456_example_img.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Jagung Giling',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Ayam Kampung',
				jumlah: 0.15,
			},
			{
				nama_bahan: 'Bawang Putih',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Timun',
		buah: 'Pisang',
		deskripsi: 'Nasi jagung disajikan dengan ayam rica-rica pedas dan segar, dilengkapi dengan timun dan pisang.',
	},
	{
		id: 3,
		nama: 'Jagung Katemak dengan Sate Kambing dan Jeruk Bali',
		harga_total: '18000',
		nutrisi: 'Energi: 450 kal, Karbohidrat: 65 gr, Protein: 25 gr, Lemak: 15 gr, Zat Besi: 20 mg',
		image_url: 'https://th.bing.com/th/id/OIP.ghi789_example_img.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Jagung Katemak',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Daging Kambing',
				jumlah: 0.15,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Rawit Hijau',
				jumlah: 0.01,
			},
		],
		sayur: 'Kacang Panjang',
		buah: 'Jeruk Bali',
		deskripsi: 'Jagung katemak hangat dengan sate kambing berbumbu khas dan irisan jeruk bali.',
	},
	{
		id: 4,
		nama: 'Sup Jagung dengan Ikan Bakar dan Mangga',
		harga_total: '16000',
		nutrisi: 'Energi: 370 kal, Karbohidrat: 50 gr, Protein: 22 gr, Lemak: 10 gr, Omega-3: 1.5 mg',
		image_url: 'https://th.bing.com/th/id/OIP.jkl012_example_img.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Jagung Manis',
				jumlah: 0.25,
			},
			{
				nama_bahan: 'Ikan Segar',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Bawang Putih',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Jahe',
				jumlah: 0.01,
			},
		],
		sayur: 'Tomat',
		buah: 'Mangga',
		deskripsi: 'Sup jagung yang lezat dengan ikan bakar beraroma dan irisan mangga segar.',
	},
	{
		id: 5,
		nama: 'Nasi Soto Ayam dengan Sayur Kangkung dan Apel',
		harga_total: '16000',
		nutrisi: 'Energi: 300 kal, Karbohidrat: 50 gr, Protein: 20 gr, Lemak: 10 gr, Vitamin B6: 1 mg',
		image_url: 'https://image.freepik.com/free-photo/nasi-soto-ayam-soto-medan-is-traditional-chicken-soup-with-rice-from-medan-north-sumatra_464898-893.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.25,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.15,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Kangkung',
		buah: 'Apel',
		deskripsi: 'Nasi dengan sup ayam yang kaya rempah, sayur kangkung, dan apel segar sebagai pelengkap.',
	},
	{
		id: 6,
		nama: 'Nasi Pecel Lele dengan Sayur Kol dan Jeruk',
		harga_total: '16000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 50 gr, Protein: 25 gr, Lemak: 10 gr',
		image_url: 'https://th.bing.com/th/id/OIP.IZqQvGrOX0zL_3RSNMiMOAHaE8?rs=1&pid=ImgDetMain',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Ikan Kembung',
				jumlah: 0.15,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Kol',
		buah: 'Jeruk',
		deskripsi: 'Nasi dengan ikan pecel goreng yang disajikan dengan sambal pecel, sayur kol, dan jeruk segar.',
	},
	{
		id: 7,
		nama: 'Nasi Mie Goreng Jawa dengan Sayur Wortel dan Apel',
		harga_total: '17000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 60 gr, Protein: 20 gr, Lemak: 16 gr',
		image_url: 'https://img-global.cpcdn.com/recipes/c0be94e707093d41/1502x1064cq70/mie-goreng-jawa-foto-resep-utama.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.25,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.1,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.03,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Wortel',
		buah: 'Apel',
		deskripsi: 'Nasi mie goreng khas Jawa dengan ayam, sayur wortel, dan apel segar.',
	},
	{
		id: 8,
		nama: 'Nasi Gulai Kambing dengan Sayur Buncis dan Pisang',
		harga_total: '17000',
		nutrisi: 'Energi: 450 kal, Karbohidrat: 55 gr, Protein: 30 gr, Lemak: 20 gr',
		image_url: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/resep-nasi-gulai.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.35,
			},
			{
				nama_bahan: 'Daging Sapi Murni',
				jumlah: 0.15,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.03,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Buncis',
		buah: 'Pisang',
		deskripsi: 'Nasi gulai kambing dengan potongan daging yang empuk, sayur buncis, dan pisang sebagai pelengkap.',
	},
	{
		id: 9,
		nama: 'Nasi Ayam Betutu dengan Sayur Sawi dan Apel',
		harga_total: '17000',
		nutrisi: 'Energi: 500 kal, Karbohidrat: 60 gr, Protein: 30 gr, Lemak: 25 gr',
		image_url: 'https://bumimin.com/wp-content/uploads/2020/07/161-1536x1536.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.5,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Sawi',
		buah: 'Apel',
		deskripsi: 'Nasi dengan ayam betutu yang dibumbui khas Betutu, disajikan dengan sayur sawi dan apel segar.',
	},
	{
		id: 10,
		nama: 'Nasi Pempek Palembang dengan Sayur Kol dan Jeruk',
		harga_total: '15000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 50 gr, Protein: 20 gr, Lemak: 20 gr',
		image_url: 'https://th.bing.com/th/id/OIP.MLo20zRkXHAWjjBYkUn1dAHaFS?w=268&h=192&c=7&r=0&o=5&dpr=1.4&pid=1.7',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Ikan Kembung',
				jumlah: 0.15,
			},
			{
				nama_bahan: 'Bawang Putih Bonggol',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Gula Konsumsi',
				jumlah: 0.02,
			},
		],
		sayur: 'Kol',
		buah: 'Jeruk',
		deskripsi: 'Nasi dengan pempek khas Palembang yang terbuat dari ikan kembung, disajikan dengan sambal pecel, sayur kol, dan jeruk segar.',
	},
	{
		id: 11,
		nama: 'Nasi Ayam Goreng Kalasan dengan Sayur Kangkung dan Pisang',
		harga_total: '17000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 50 gr, Protein: 30 gr, Lemak: 20 gr',
		image_url: 'https://th.bing.com/th/id/OIP.oCDCnbN9-KU9Pd67q1gIpQHaFB?rs=1&pid=ImgDetMain',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Minyak Goreng Kemasan Sederhana',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Kangkung',
		buah: 'Pisang',
		deskripsi: 'Nasi dengan ayam goreng kalasan yang gurih, sayur kangkung, dan pisang segar.',
	},
	{
		id: 12,
		nama: 'Nasi Goreng Spesial dengan Sayur Sawi dan Jeruk',
		harga_total: '17000',
		nutrisi: 'Energi: 450 kal, Karbohidrat: 60 gr, Protein: 25 gr, Lemak: 15 gr',
		image_url: 'https://img-global.cpcdn.com/recipes/6728739403f125ba/1200x630cq70/photo.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.25,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.1,
			},
			{
				nama_bahan: 'Telur Ayam Ras',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Sawi',
		buah: 'Jeruk',
		deskripsi: 'Nasi goreng spesial dengan ayam, telur, sayur sawi, dan jeruk segar.',
	},
	{
		id: 13,
		nama: 'Nasi Sop Buntut dengan Sayur Wortel dan Apel',
		harga_total: '17000',
		nutrisi: 'Energi: 500 kal, Karbohidrat: 60 gr, Protein: 35 gr, Lemak: 20 gr',
		image_url: 'https://th.bing.com/th/id/OIP.3Zl0C13mxn61e8d-jtcMkAHaE7?rs=1&pid=ImgDetMain',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.4,
			},
			{
				nama_bahan: 'Daging Sapi Murni',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Wortel',
		buah: 'Apel',
		deskripsi: 'Nasi dengan sup buntut sapi yang dimasak dengan bumbu aromatik, sayur wortel, dan apel segar.',
	},
	{
		id: 14,
		nama: 'Nasi Rujak Buah dengan Sayur Timun dan Jeruk',
		harga_total: '12000',
		nutrisi: 'Energi: 300 kal, Karbohidrat: 50 gr, Protein: 10 gr, Lemak: 10 gr, Vitamin C: 15 mg',
		image_url: 'https://th.bing.com/th/id/OIP.7jttfqoqOq04SdTBhMTSBAHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.4&pid=1.7',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Gula Konsumsi',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Timun',
		buah: 'Jeruk',
		deskripsi: 'Nasi dengan campuran berbagai buah segar, sayur timun, disajikan dengan saus rujak pedas manis dan taburan kacang tanah.',
	},
	{
		id: 15,
		nama: 'Nasi Pisang Goreng dengan Sayur Kangkung dan Apel',
		harga_total: '10000',
		nutrisi: 'Energi: 300 kal, Karbohidrat: 50 gr, Protein: 10 gr, Lemak: 20 gr, Vitamin B6: 1 mg',
		image_url: 'https://i.pinimg.com/736x/58/6a/8e/586a8e78c0ba84068cd255877c973699.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.25,
			},
			{
				nama_bahan: 'Telur Ayam Ras',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Minyak Goreng Kemasan Sederhana',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Bawang Putih Bonggol',
				jumlah: 0.01,
			},
		],
		sayur: 'Kangkung',
		buah: 'Apel',
		deskripsi: 'Nasi dengan pisang yang digoreng hingga keemasan, disajikan dengan sayur kangkung dan apel segar.',
	},
	{
		id: 16,
		nama: 'Nasi Sop Kambing dengan Sayur Wortel dan Jeruk',
		harga_total: '16000',
		nutrisi: 'Energi: 600 kal, Karbohidrat: 70 gr, Protein: 40 gr, Lemak: 25 gr',
		image_url: 'https://cdns.klimg.com/merdeka.com/i/w/news/2020/08/06/1206033/content_images/670x335/20200806121801-1-6-resep-sop-kambing-gurih-enak-dan-tidak-amis-004-ayu-isti.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.35,
			},
			{
				nama_bahan: 'Daging Sapi Murni',
				jumlah: 0.15,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.03,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Wortel',
		buah: 'Jeruk',
		deskripsi: 'Nasi dengan sup kambing yang kaya rempah, potongan daging yang empuk, sayur wortel, dan jeruk segar.',
	},
	{
		id: 17,
		nama: 'Nasi Ayam Taliwang dengan Sayur Sawi dan Apel',
		harga_total: '16000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 50 gr, Protein: 30 gr, Lemak: 25 gr',
		image_url: 'https://img-global.cpcdn.com/recipes/6b63780039bb496d/680x482cq70/ayam-taliwang-dan-plecing-kangkung-khas-lombok-foto-resep-utama.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.15,
			},
			{
				nama_bahan: 'Gula Konsumsi',
				jumlah: 0.01,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Sawi',
		buah: 'Apel',
		deskripsi: 'Nasi dengan ayam yang dimarinasi bumbu taliwang khas Lombok, disajikan dengan sayur sawi dan apel segar.',
	},
	{
		id: 18,
		nama: 'Bakmi Jawa dengan Sayur Wortel dan Apel',
		harga_total: '16000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 50 gr, Protein: 20 gr, Lemak: 15 gr',
		image_url: 'https://www.kotajogja.com/wp-content/uploads/2021/01/47584343_161777308122609_6750543244257428523_n.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.1,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Wortel',
		buah: 'Apel',
		deskripsi: 'Nasi dengan bakmi khas Jawa, potongan ayam, sayur wortel, dan apel segar.',
	},
	{
		id: 19,
		nama: 'Nasi Ayam Pop dengan Sayur Kangkung dan Pisang',
		harga_total: '16000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 50 gr, Protein: 30 gr, Lemak: 15 gr',
		image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtV17RFxnaois7kw2ZSjhLJVYPaWo4PmTMg&s',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.35,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Cabai Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Kangkung',
		buah: 'Pisang',
		deskripsi: 'Nasi dengan ayam pop khas Bandung yang gurih, sayur kangkung, dan pisang segar.',
	},
];
