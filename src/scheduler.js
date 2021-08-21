const schedule = require('node-schedule');

schedule.tz = 'Etc/UTC';
schedule.scheduleJob('0 0 7 * * MON', function(fireDate){
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});
