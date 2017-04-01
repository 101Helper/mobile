function random_posts(json) {
    for (var i = 0; i < randomposts_number; i++) {
        var entry = json.feed.entry[i];
        var randompoststitle = entry.title.$t;
        if ('content' in entry) {
            var randompostsnippet = entry.content.$t
        } 
else {
            if ('summary' in entry) {
                var randompostsnippet = entry.summary.$t
            } 
        };
        randompostsnippet = randompostsnippet.replace(/<[^>]*>/g, "");
        if (randompostsnippet.length < randomposts_chars) {
            var randomposts_snippet = randompostsnippet
        } else {
            randompostsnippet = randompostsnippet.substring(0, randomposts_chars);
            var whitespace = randompostsnippet.lastIndexOf(" ");
            randomposts_snippet = randompostsnippet.substring(0, whitespace) + "&#133;";
        };
        for (var j = 0; j < entry.link.length; j++) {
             if (entry.link[j].rel == 'alternate') {
                var randompostsurl = entry.link[j].href;
            }
        };
        document.write('<li>');
        document.write('<a href="' + randompostsurl + '">' + randompoststitle + '</a>');
    }
};
getvalue();
for (var i = 0; i < randomposts_number; i++) {
    document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[i] + '&max-results=1&callback=random_posts\"><\/script>')
};
$(document).ready(function(){
    $("#hide").click(function(){
        $("#random-posts").hide();
    });
    $("#show").click(function(){
        $("#random-posts").show();
    });
});
