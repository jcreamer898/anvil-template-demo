module.exports = function( _, Handlebars ) {
	return function( scripts ) {
		var result = "";

		_.each(scripts, function( url ) {
			result += "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + Handlebars.Utils.escapeExpression( url ) + "\"/>";
		});

		return new Handlebars.SafeString( result );
	};
};