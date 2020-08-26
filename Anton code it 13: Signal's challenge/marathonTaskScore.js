/*
Marathon Task Score

In CodeSignal marathons, each task score is calculated independently. 
For a specific task, you get some amount of points if you solve it 
correctly, or you get a 0. Here is how the exact number of points is 
calculated:

* If you solve a task on your first attempt within the first minute, 
  you get maxScore points.
* Each additional minute you spend on the task adds a penalty of 
  (maxScore / 2) * (1 / marathonLength) to your final score.
* Each unsuccessful attempt adds a penalty of 10 to your final score.
* After all the penalties are deducted, if the score is less than 
  maxScore / 2, you still get maxScore / 2 points.

Implement an algorithm that calculates this score given some initial parameters.

Link to the description: https://app.codesignal.com/company-challenges/codesignal/68DxrkM9yXirF4fuD
Link to the live coding: https://youtu.be/srcZTNFmqvI
*/

function marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) {
    const unsuccessful = submissions - 1;
    const unsuccessfulScore = unsuccessful * 10;
    const timeScore = successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength);
    const penaltyScore = unsuccessfulScore + timeScore;
    
    if (successfulSubmissionTime < 0) {
        return 0;
    }
    
    return maxScore - penaltyScore < maxScore / 2 ?
        maxScore / 2 :
        maxScore - penaltyScore;
}
