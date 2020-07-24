/*
Tasks scheduling

As a new engineer at Asana, you're working on a feature that helps users estimate 
how long it will take them to complete their workload. All a user has to do is 
specify the number of hours they work every day, provide the time allocated for 
each task, and the feature automatically calculates the number of days it will 
take for the user to finish all of their tasks. Since you think it's a bad habit 
to leave a given task unfinished at the end of a day, tasks should be distributed 
so that each one will be completed during the working hours of a single day.

Given the time allocated to a user's tasks and their daily workingHours, return 
the minimum number of days necessary for them to complete the given tasks. 
If there's no way to tackle all of them, return -1 instead.

Link to the description: https://app.codesignal.com/company-challenges/asana/qsDDsKH6MSGSWaHas
Link to the live coding: https://youtu.be/44-zQrrBHqg
*/

const hash = {};

function getCombinations(workingHours, tasks) {
    const result = [];
    
    for (let i = 0; i < tasks.length - 1; i++) {
        for (let j = i + 1; j < tasks.length; j++) {
            const weight = tasks[i] + tasks[j];
            
            if (weight <= workingHours) {
                result.push([
                    ...tasks.filter((_, index) => index !== i && index !== j),
                    weight
                ]);
            }
        }
    }
    
    return result;
}

function reducer(workingHours, tasks) {
    const result = [tasks.length];
    const hashIndex = String(tasks.sort((a, b) => a - b));
    
    if (!hash[hashIndex]) {
        hash[hashIndex] = true;
        
        const nextCombinations = getCombinations(workingHours, tasks);
        
        for (const nextCombination of nextCombinations) {
            result.push(...reducer(workingHours, nextCombination));
        }
    }
    
    return result;
}

function tasksScheduling(workingHours, tasks) {
    if (tasks.findIndex(task => task > workingHours) !== -1) {
        return -1;
    }
    
    const filteredTasks = tasks.filter(task => task !== workingHours);
    const supportedTasks = tasks.length - filteredTasks.length;
    
    const minimumLengthCombination = reducer(workingHours, filteredTasks);
    
    return supportedTasks + Math.min(...minimumLengthCombination);
}
