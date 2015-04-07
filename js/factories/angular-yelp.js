angular.module('angular-yelp', []).factory("fioYelpAPI", function($http) {
	return {
		"retrieveYelp": function(name, loc, callback) {
			var method = 'GET';
			var url = 'http://api.yelp.com/v2/search';
			var params = {
					callback: 'angular.callbacks._0',
					location: loc ? loc : '92064',
					oauth_consumer_key: 'wITWBLUPHgUgQtUnf7MUYg', //Consumer Key
					oauth_token: 'qUbksGbiXRh_Tlfvt9F4Bcaihef6dJbJ', //Token
					oauth_signature_method: "HMAC-SHA1",
					oauth_timestamp: new Date().getTime(),
					oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
					term: name ? name : 'photographer'
				};
			var consumerSecret = 'dyfVuIiqYUAUeVZ073CWCd7y4Yw'; //Consumer Secret
			var tokenSecret = 'QPr-V8wf_8_t9mYLG-P4RMF5wBI'; //Token Secret
			var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
			params['oauth_signature'] = signature;
			var obj = $http.jsonp(url, {params: params}).success(callback);
			return obj;
		}
	}
});