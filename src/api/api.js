const api = {
	getDirectory: async (setData) => {
		try {
			let response = await fetch('https://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8');
			const { data } = await response.json();
			setData(data.files);
		} catch(e) {
				return [{error: e }];
		}
	}
}

export default api;