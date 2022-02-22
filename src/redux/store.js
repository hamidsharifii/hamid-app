
import { createStore } from 'Redux';
 
// Creating store
const store = createStore(taskList);
 
// Here add is action as you can see console,
// its an object with some info
const add = setAlarm('Wake up');
console.log(add);
 
// Dispatch usually trigger reducer and perform task
store.dispatch(add);
 
// getState() function is used to get current state
console.log(store.getState());
 
store.dispatch(setAlarm('Study'));
store.dispatch(setAlarm('Eat'));
store.dispatch(setAlarm('Go to sleep'));
store.dispatch(setAlarm('Eat'));
store.dispatch(setAlarm('Work'));
store.dispatch(setAlarm('Sleep'));
store.dispatch(alteredSetAlarm('Sleep'));
 
console.log(store.getState());