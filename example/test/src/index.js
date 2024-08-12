// import { BusPlus } from 'bus-plus';
const { BusPlus } = require('bus-plus');
const mitter = new BusPlus();

mitter.on('message', function (data) {
    console.log(data); // test data
});
mitter.once('test', function (data) {

});
// 支持链式调用
mitter.emit('message', 'test data')
    .off('message');
