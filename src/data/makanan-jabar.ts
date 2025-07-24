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

export const makananJabar: MenuItem[] = [
	{
		id: 1,
		nama: 'Nasi Sate Maranggi dengan Cah Bayam dan Apel',
		harga_total: '15000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 60 gr, Protein: 20 gr, Lemak: 10 gr, Vitamin C: 30 mg',
		image_url: 'https://th.bing.com/th/id/OIP.C5vjDk6Mp2UYbvXpmS4m-gHaGF?rs=1&pid=ImgDetMain',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Daging Sapi Murni',
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
		sayur: 'Bayam',
		buah: 'Apel',
		deskripsi: 'Nasi dengan sate daging sapi khas Bandung yang disajikan dengan cah bayam dan apel segar.',
	},
	{
		id: 2,
		nama: 'Nasi Gado-Gado dengan Sayur Wortel dan Jeruk',
		harga_total: '14000',
		nutrisi: 'Energi: 300 kal, Karbohidrat: 55 gr, Protein: 15 gr, Lemak: 10 gr, Vitamin A: 20 mg',
		image_url: 'https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Gado-Gado.jpg?fit=2461%2C2359&ssl=1',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
			{
				nama_bahan: 'Gula Konsumsi',
				jumlah: 0.02,
			},
		],
		sayur: 'Wortel',
		buah: 'Jeruk',
		deskripsi: 'Nasi dengan salad sayuran segar, cah wortel, dan jeruk sebagai pelengkap yang kaya nutrisi.',
	},
	{
		id: 3,
		nama: 'Nasi Bakso Bandung dengan Sayur Sawi dan Melon',
		harga_total: '17000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 50 gr, Protein: 20 gr, Lemak: 10 gr, Zat Besi: 15 mg',
		image_url: 'https://th.bing.com/th/id/OIP._9kwRurM_aJ35_XX5ePu3AHaE6?w=301&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Daging Sapi Murni',
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
		sayur: 'Sawi',
		buah: 'Melon',
		deskripsi: 'Nasi disajikan dengan bakso khas Bandung, sayur sawi segar, dan irisan melon.',
	},
	{
		id: 4,
		nama: 'Nasi Rendang Daging dengan Sayur Buncis dan Pisang',
		harga_total: '17000',
		nutrisi: 'Energi: 500 kal, Karbohidrat: 60 gr, Protein: 25 gr, Lemak: 20 gr',
		image_url: 'https://th.bing.com/th/id/OIP.hWAvgCUa_1dPwH6cWX41ZgHaGa?w=231&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.4,
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
		deskripsi: 'Nasi rendang dengan daging sapi yang dimasak dalam bumbu rendang, sayur buncis, dan pisang sebagai pelengkap.',
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
		image_url: 'https://cdn0-production-images-kly.akamaized.net/jZA1w-rqRpEETSxrn9pE0yJEueE=/0x109:1999x1236/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3188949/original/060668500_1595560664-sop_kambing.jpg',
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
	{
		id: 20,
		nama: 'Nasi Sayur Asem dengan Sayur Kangkung dan Apel',
		harga_total: '12000',
		nutrisi: 'Energi: 250 kal, Karbohidrat: 40 gr, Protein: 10 gr, Lemak: 10 gr, Vitamin C: 10 mg',
		image_url: 'https://img-global.cpcdn.com/recipes/b0fb156a606810a7/680x482cq70/sayur-asem-kangkung-foto-resep-utama.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Kangkung',
		buah: 'Apel',
		deskripsi: 'Nasi dengan sup sayur asem segar, sayur kangkung, dan apel sebagai pelengkap.',
	},
	{
		id: 21,
		nama: 'Nasi Ketoprak dengan Sayur Timun dan Jeruk',
		harga_total: '15000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 60 gr, Protein: 20 gr, Lemak: 10 gr',
		image_url: 'https://i.ytimg.com/vi/DRQOdPbRjH4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCSMzlew1paKugXFYN18R5QlYQp6g',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Telur Ayam Ras',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Gula Konsumsi',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Timun',
		buah: 'Jeruk',
		deskripsi: 'Nasi dengan bihun, telur, sayur timun, dan saus kacang khas Jakarta.',
	},
	{
		id: 22,
		nama: 'Nasi Tahu Gejrot dengan Sayur Kangkung dan Apel',
		harga_total: '16000',
		nutrisi: 'Energi: 300 kal, Karbohidrat: 45 gr, Protein: 10 gr, Lemak: 10 gr, Vitamin C: 5 mg',
		image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AN8mmmOw4e-1_Ngc_H-8epW6kpQRXAyHpA&s',
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
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Kangkung',
		buah: 'Apel',
		deskripsi: 'Nasi dengan tahu goreng yang disiram dengan bumbu gejrot pedas manis, sayur kangkung, dan apel segar.',
	},
	{
		id: 23,
		nama: 'Nasi Sate Ayam Madura dengan Sayur Sawi dan Jeruk',
		harga_total: '15000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 50 gr, Protein: 25 gr, Lemak: 15 gr',
		image_url: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/a1411f40-c91d-46f5-80cc-5a4d39b29748_Go-Biz_20201205_180017.jpeg',
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
				jumlah: 0.03,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Sawi',
		buah: 'Jeruk',
		deskripsi: 'Nasi dengan sate ayam khas Madura yang kaya rasa, disajikan dengan sayur sawi dan jeruk segar.',
	},
	{
		id: 24,
		nama: 'Mie Aceh dengan Sayur Wortel dan Apel',
		harga_total: '16000',
		nutrisi: 'Energi: 500 kal, Karbohidrat: 70 gr, Protein: 25 gr, Lemak: 25 gr',
		image_url: 'https://pasundanekspres.id/storage/uploads/conten/BZPcPvH39LgOt8OJ.webp',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
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
		buah: 'Apel',
		deskripsi: 'Nasi dengan mie khas Aceh yang dilengkapi kuah kari, potongan daging sapi yang empuk, sayur wortel, dan apel segar.',
	},
	{
		id: 25,
		nama: 'Nasi Gudeg Yogyakarta dengan Sayur Kol dan Pisang',
		harga_total: '17000',
		nutrisi: 'Energi: 450 kal, Karbohidrat: 70 gr, Protein: 15 gr, Lemak: 20 gr',
		image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMcTBIt-BHKn7NhOyeE5fOTxOUNzIU6-dCw&s',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.4,
			},
			{
				nama_bahan: 'Telur Ayam Ras',
				jumlah: 0.05,
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
		sayur: 'Kol',
		buah: 'Pisang',
		deskripsi: 'Nasi dengan gudeg manis khas Yogyakarta yang dimasak dengan santan, sayur kol, dan pisang sebagai pelengkap.',
	},
	{
		id: 26,
		nama: 'Nasi Ayam Betutu dengan Sayur Sawi dan Apel',
		harga_total: '17000',
		nutrisi: 'Energi: 500 kal, Karbohidrat: 60 gr, Protein: 30 gr, Lemak: 25 gr',
		image_url: 'https://img-global.cpcdn.com/recipes/c985b59cefeff326/680x482cq70/nasi-ayam-betutu-ucu-foto-resep-utama.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.5,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.15,
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
		id: 27,
		nama: 'Nasi Ayam Goreng Kalasan dengan Sayur Kangkung dan Pisang',
		harga_total: '16000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 50 gr, Protein: 30 gr, Lemak: 20 gr',
		image_url: 'https://img-global.cpcdn.com/recipes/4a00e1bc5abea210/1200x630cq70/photo.jpg',
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
				jumlah: 0.03,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Kangkung',
		buah: 'Pisang',
		deskripsi: 'Nasi dengan ayam goreng kalasan yang gurih, sayur kangkung, dan pisang segar.',
	},
	{
		id: 28,
		nama: 'Nasi Bakmi Jawa dengan Sayur Wortel dan Apel',
		harga_total: '16000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 50 gr, Protein: 20 gr, Lemak: 15 gr',
		image_url: 'https://th.bing.com/th/id/OIP.wxRYuc-Vx_c8tYjd_5IPiwAAAA?rs=1&pid=ImgDetMain',
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
		id: 29,
		nama: 'Nasi Tim Ikan Tuna Telur Puyuh dengan Sayur Kangkung dan Pisang',
		harga_total: '17000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 50 gr, Protein: 30 gr, Omega-3: 3 gr, Vitamin D: 1 mg',
		image_url: 'https://img-global.cpcdn.com/recipes/3ea934d5d2c9b536/680x482cq70/tim-ikan-tuna-pedas-foto-resep-utama.jpg',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.3,
			},
			{
				nama_bahan: 'Ikan Tongkol',
				jumlah: 0.15,
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
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Kangkung',
		buah: 'Pisang',
		deskripsi: 'Nasi tim dengan topping ikan tuna, telur puyuh, sayur kangkung, dan pisang segar, kaya akan protein dan Omega-3.',
	},
	{
		id: 30,
		nama: 'Nasi Bubur Soto Ayam Santan dengan Sayur Wortel dan Apel',
		harga_total: '17000',
		nutrisi: 'Energi: 350 kal, Karbohidrat: 50 gr, Protein: 20 gr, Lemak sehat: 15 gr',
		image_url: 'https://th.bing.com/th/id/OIP.xX6HBmcnXLGFgXAkE9my0wHaE7?w=288&h=192&c=7&r=0&o=5&dpr=1.4&pid=1.7',
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
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
		],
		sayur: 'Wortel',
		buah: 'Apel',
		deskripsi: 'Nasi bubur dengan sup soto ayam santan, sayur wortel, dan apel segar.',
	},
	{
		id: 31,
		nama: 'Nasi Bubur Sup Telur Daging Kacang Merah dengan Sayur Sawi dan Jeruk',
		harga_total: '16000',
		nutrisi: 'Energi: 400 kal, Karbohidrat: 50 gr, Protein: 20 gr, Lemak: 10 gr',
		image_url: 'https://th.bing.com/th/id/OIP.JS4bDE4tv6uIMcCdfbcYFQHaFH?w=234&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Telur Ayam Ras',
				jumlah: 0.05,
			},
			{
				nama_bahan: 'Daging Sapi Murni',
				jumlah: 0.1,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Sawi',
		buah: 'Jeruk',
		deskripsi: 'Nasi bubur dengan sup telur, daging sapi, sayur sawi, dan jeruk segar.',
	},
	{
		id: 32,
		nama: 'Nasi Bubur Kanju Rumbi Ayam dan Udang dengan Sayur Kangkung dan Pisang',
		harga_total: '17000',
		nutrisi: 'Energi: 450 kal, Karbohidrat: 60 gr, Protein: 30 gr, Lemak: 15 gr',
		image_url: 'https://th.bing.com/th/id/OIP.K_TPQFxtUWzOIfQkEJKhGgHaII?w=153&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
		bahan_pokok: [
			{
				nama_bahan: 'Beras Premium',
				jumlah: 0.2,
			},
			{
				nama_bahan: 'Daging Ayam Ras',
				jumlah: 0.1,
			},
			{
				nama_bahan: 'Ikan Kembung',
				jumlah: 0.1,
			},
			{
				nama_bahan: 'Cabai Rawit Merah',
				jumlah: 0.01,
			},
			{
				nama_bahan: 'Bawang Merah',
				jumlah: 0.02,
			},
		],
		sayur: 'Kangkung',
		buah: 'Pisang',
		deskripsi: 'Nasi bubur kental dengan campuran ayam dan udang, disajikan dengan sayur kangkung dan pisang segar.',
	},
];
