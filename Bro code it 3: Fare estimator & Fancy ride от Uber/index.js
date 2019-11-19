/*
Fancy ride

Being a new Uber user, you have $20 off your first ride. 
You want to make the most out of it and drive in the fanciest 
car you can afford, without spending any out-of-pocket money. 
There are 5 options, from the least to the most expensive: 
"UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".

You know the length l of your ride in miles and how much one 
mile costs for each car. Find the best car you can afford.

Link to the description: http://bit.ly/antoncodeit-fancy-ride
Link to the live coding: http://bit.ly/antoncodeit-bro-live-3
*/

function fancyRide(l, fares) {
  const tariffs = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

  let tariff;
  while (fares.length) {
    const fare = fares.shift();

    if (l * fare > 20) {
      return tariff;
    }

    tariff = tariffs.shift();
  }

  return tariff;
}

/*
Fare estimator

Uber is building a Fare Estimator that can tell you how much 
your ride will cost before you request it. It works by passing 
approximated ride distance and ride time through this formula:

(Cost per minute) * (ride time) + (Cost per mile) * (ride distance)

where Cost per minute and Cost per mile depend on the car type.

You are one of the engineers building the Fare Estimator, so 
knowing cost per minute and cost per mile for each car type, 
as well as ride distance and ride time, return the fare estimates 
for all car types.

Link to the description: http://bit.ly/antoncodeit-fare-estimator
Link to the live coding: http://bit.ly/antoncodeit-bro-live-3
*/

function fareEstimator(
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) {
  const result = [];

  const count = cost_per_minute.length;

  for (let i = 0; i < count; i++) {
    result[i] =
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance;
  }

  return result;
}
