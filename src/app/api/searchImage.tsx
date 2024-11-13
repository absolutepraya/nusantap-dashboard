import axios from 'axios';

// Define the search function to get image results
export const searchImages = async (query: string) => {
	const endpoint = 'https://api.bing.microsoft.com/v7.0/images/search';
	const count = 3;

	try {
		const response = await axios.get(endpoint, {
			headers: {
				'Ocp-Apim-Subscription-Key': process.env.BING_SEARCH_KEY!,
			},
			params: {
				q: query,
				count: count,
			},
		});

		return response.data.value; // This will return the array of images
	} catch (error) {
		console.error('Error fetching images:', error);
		throw error;
	}
};
