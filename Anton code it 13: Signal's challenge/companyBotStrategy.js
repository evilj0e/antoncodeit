/*
Company Bot Strategy

Each CodeSignal Company Bot is trained by engineers from that specific company. 
The way it works is that a representative group of engineers from each company 
is identified as trainers before the bot goes live, and they CodeFight against 
the bot during a training phase. The current training algorithm is definitely 
more complex, but let's assume it works this way:

For each trainer we collect two pieces of information per task [answerTime, correctness], 
where correctness is 1 if the answer was correct, -1 if the answer was wrong, 
and 0 if no answer was given. In this case, the bot's correct answer time for 
a given task would be the average of the answer times from the trainers who answered 
correctly. Given all of the training information for a specific task, calculate
the bot's answer time.

Link to the description: https://app.codesignal.com/company-challenges/codesignal/gJMBmTwHHMF8mbQvH
Link to the live coding: https://youtu.be/srcZTNFmqvI
*/

function companyBotStrategy(trainingData) {
    const [sum, count] = trainingData
        .reduce((acc, [time, correctness]) => {
            if (correctness === 1) {
                acc[0] += time;
                acc[1]++;
            }
            
            return acc;
        }, [0, 0]);
        
    if (!count) {
        return 0;
    }
    
    return sum / count;
}
