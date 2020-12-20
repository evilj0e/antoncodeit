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
