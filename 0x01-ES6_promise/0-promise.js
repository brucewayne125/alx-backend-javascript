const get getResponseFromAPI() = () => {
	return new promise((resolve, reject) =>{
		setTimeout(() => {
			const success = true;
			if(success){
				resolve("response from API");
			}else(
				reject(new error("Error response from API"));
			)
		}, 1000);
	});
};

export default getResponseFromAPI;
