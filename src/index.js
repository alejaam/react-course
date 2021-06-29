import React from 'react';
import ReactDOM from 'react-dom';

// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { ForrmWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memorize/Memorize';
// import { MemoHook } from './components/06-memorize/MemoHook';
// import { CallBackHook } from './components/06-memorize/CallBackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.render(
    <TodoApp />,
  document.getElementById('root')
);
