module.exports = function( _, Handlebars ) {
	return function( text, url ) {
		text = Handlebars.Utils.escapeExpression( text );
		url  = Handlebars.Utils.escapeExpression( url );

		var result = "<a href=\"" + url + "\">" + text + "</a>";

		return new Handlebars.SafeString( result );
	};
};