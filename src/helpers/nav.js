module.exports = function( _, Handlebars ) {
    return function( navigation, className, activeLink ) {
        var result = "<nav class=\"" + className + "\"><ul>\n",
            buildLink = function( text, url, active ) {
                text = Handlebars.Utils.escapeExpression( text );
                url  = Handlebars.Utils.escapeExpression( url );

                return "     <li" + ( active ? " class=\"is-active\"" : "" ) + ">" +
                    Handlebars.helpers.link.call( this, text, url ) + "</li>\n";
            };
        
        _.each( navigation, function( linkObject, key ) {
            var active = ( key === activeLink );

            result += buildLink( key, linkObject.href, active );
        });

        result += "</ul></nav>";
        

        return new Handlebars.SafeString( result );
    };
};