/*
You arrive at the airport only to realize that you grabbed your North Pole 
Credentials instead of your passport. While these documents are extremely 
similar, North Pole Credentials aren't issued by a country and therefore 
aren't actually valid documentation for travel in most of the world.

It seems like you're not the only one having problems, though; a very long 
line has formed for the automatic passport scanners, and the delay could 
upset your travel itinerary.

Due to some questionable network security, you realize you might be able 
to solve both of these problems at the same time.

The automatic passport scanners are slow because they're having trouble 
detecting which passports have all required fields.

The expected fields are as follows:

byr (Birth Year)
iyr (Issue Year)
eyr (Expiration Year)
hgt (Height)
hcl (Hair Color)
ecl (Eye Color)
pid (Passport ID)
cid (Country ID)

Passport data is validated in batch files (your puzzle input). 
Each passport is represented as a sequence of key:value pairs separated 
by spaces or newlines. Passports are separated by blank lines.

Count the number of valid passports - those that have all required fields. 
Treat cid as optional. In your batch file, how many passports are valid?

https://adventofcode.com/2020/day/4
*/

const data = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in
`;
const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

const processDataToPassports = (data) => {
  let passport = {};

  return data.split('\n')
    .reduce((passportsArray, line) => {
      line.split(' ')
        .map(item => item.split(':'))
        .forEach(([key, value]) => {
          if (key) {
            passport[key] = value;
          } else {
            passportsArray.push(passport);
            passport = {};
          }
        });

      return passportsArray;
    }, []);
};

const isPassportValidByRequredFields = (passport, requiredFields) => {
  let isValid = true;
  const fields = [...requiredFields];

  while (isValid && fields.length) {
    const key = fields.pop();

    if (!passport[key]) {
      isValid = false;
    }
  }

  return isValid;
};

const computeCountOfValidPassports = (data, requiredFields) => {
  const passports = processDataToPassports(data);

  return passports
    .reduce(
      (count, passport) =>
        count + isPassportValidByRequredFields(passport, requiredFields),
      0
    );
};

console.log(computeCountOfValidPassports(data, requiredFields));
