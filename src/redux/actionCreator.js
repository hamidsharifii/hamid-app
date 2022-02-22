
function setAlarm(task) {
   
  return {
     
    type: 'SET_ALARM',
    task: task
  }
}
 
function alteredSetAlarm(task) {
  
  return {
    type: 'ALTERED_SET_ALARM',
    task: task
  }
}