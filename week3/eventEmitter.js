//EVENT EMITTER:
//eg1:
var events = require('events');
var em = new events.EventEmitter();
em.on('FirstEvent', function (name) {
    console.log('Good Morning! ' +name);
});

em.emit('FirstEvent', 'vyshnavi');


//eg2:
var emitter = require('events').EventEmitter;

function LoopProcessor(num) {
    var e = new emitter();
    
    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            e.emit('BeforeProcessing', i);
            
            console.log('Processing number:' + i);
            
            e.emit('AfterProcessing', i);
        }
    }
    , 2000)
    
    return e;
}
var lp = LoopProcessor(3);

lp.on('BeforeProcessing', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcessing', function (data) {
    console.log('Completed processing ' + data);
});
