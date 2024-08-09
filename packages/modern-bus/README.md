### Bus
- 用法和mitter方向保持一致
```js
import { Bus } from 'modern-bus';
const mitter = new Bus();

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
import { Bus } from 'modern-bus';

class MyBus extends Bus {
    construct() {
        
    }
}
```