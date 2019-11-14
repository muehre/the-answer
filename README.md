# The Answer
The Answer to the Ultimate Question of Life, the Universe, and Everything

## Usage

```javascript
import theAnswer from './index.ts'

theAnswer('What is the end of Pi?')
// Expected output: 42    

theAnswer('What is the Answer to the Ultimate Question of Life, the Universe, and Everything?')
// Expected output: 42    

//...
```

For more complex Questions it's also possible to use the Question builder

```javascript
import theAnswer, {QuestionBuilder} from './index.ts'

const builder = new QuestionBuilder('What is the Answer to the Ultimate Question of Life, the Universe, and Everything')
builder.addCondition('on a sunny day');
builder.addCondition('in winter');
builder.addCondition('at evening');
builder.addCondition('while eating an ice cream');

theAnswer(builder.render())
// Expected output: 42
```

## Versioning

Versioning is not required as the Interface neither the Answer will ever change.