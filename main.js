var casper = require('casper').create();
// casper.echo('Hello World', 'INFO');
// casper.exit();
casper.start('http://www.google.com', function() {
    this.capture('./output/test.png');
});
casper.run();