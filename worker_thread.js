// worker threads enables use of threads that execute JS in parallel
// Code executes in workerthread is executed as separate child process preventing it from blockinf main app
// Cluster module multiple NODEJS instances that distribute workload
// Worker_thread multiple application threads within the single nodejs instance
const {parentPort} = require('node:worker_threads');

 
let j =0;
for (let i = 0; i < 6000000000; i++) { 
    j++;
}

parentPort.postMessage(j);