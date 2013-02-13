module.exports = function( _, Handlebars ) {
	return function( scripts ) {
		var result = "";

		_.each(scripts, function( url ) {
			result += "<script src=\"" + Handlebars.Utils.escapeExpression( url ) + "\"></script>\n    ";
		});

		return new Handlebars.SafeString( result );
	};
};