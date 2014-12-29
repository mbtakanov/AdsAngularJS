app.factory('adsServices', function ($http) {
	function getAllAds (success, error) {
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/ads'
		})
		.success(function (data, status, headers, config) {
			success(data, status, headers(), config);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers, config);
		});
	}

	return {
		getAllAds: getAllAds
	}
});