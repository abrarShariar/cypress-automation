const my_new_promise = new Promise((resolve, reject) => {
	// get data from the url
	const data = [1,2,3,4];
	if (data.length > 3) {
		reject('Data is too long!')
	}
	resolve("OK!");
});

my_new_promise
	.then(data => {
		console.log(data);
		return data + " New ";
	})
	.then(data => {
		console.log(data);
		return data + " CATCH ";
	})
	.catch(err => {
		console.log(err);
	})
	.finally(data => {
		console.log("Finally we are here");
		console.log(data);
	});