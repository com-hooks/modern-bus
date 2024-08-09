## bus-plus
- 用法和mitter方向保持一致
```js
import { BusPlus } from 'bus-plus';
const mitter = new BusPlus();

mitter.on('message', function(data) {
    console.log(data); // test data
});
mitter.once('test', function(data) {

});
// 支持链式调用
mitter.emit('message', 'test data')
      .off('message');

```

### extends
```js
import { BusPlus } from 'bus-plus';

class MyBus extends BusPlus {
    construct() {
        
    }
}
```