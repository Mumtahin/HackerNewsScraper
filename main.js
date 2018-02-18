var casper = require('casper').create();

casper.start('http://www.google.com/', function() {
    var title = this.getTitle();
    var url = this.getCurrentUrl();
    console.log(title + " " + url);
});
casper.run();