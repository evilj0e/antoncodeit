const data = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007

pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
`;
const rules = [
    {
        key: "byr",
        validation: (value) =>
            /^\d{4}$/.test(value) && +value >= 1920 && +value <= 2002
    },
    {
        key: "iyr",
        validation: (value) =>
            /^\d{4}$/.test(value) && +value >= 2010 && +value <= 2020
    },
    {
        key: "eyr",
        validation: (value) =>
            /^\d{4}$/.test(value) && +value >= 2020 && +value <= 2030
    },
    {
        key: "hgt",
        validation: (value) => {
            if (/^(\d+)(cm|in)$/.test(value)) {
                if (value.endsWith("cm")) {
                    return parseInt(value, 10) >= 150 && parseInt(value, 10) <= 193;
                }

                if (value.endsWith("in")) {
                    return parseInt(value, 10) >= 59 && parseInt(value, 10) <= 76;
                }
            }

            return false;
        }
    },
    { key: "hcl", validation: (value) => /^#[0-9a-f]{6}$/.test(value) },
    {
        key: "ecl",
        validation: (value) =>
            ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value)
    },
    { key: "pid", validation: (value) => /^\d{9}$/.test(value) }
];

const processDataToPassports = (data) => {
    let passport = {};

    return data.split("\n").reduce((passportsArray, line) => {
        line
            .split(" ")
            .map((item) => item.split(":"))
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

const isPassportValidByRules = (passport, rules) => {
    let isValid = true;
    const fieldsRules = [...rules];

    while (isValid && fieldsRules.length) {
        const rule = fieldsRules.pop();

        if (!rule.validation(passport[rule.key])) {
            isValid = false;
        }
    }

    return isValid;
};

const computeCountOfValidPassports = (data, rules) => {
    const passports = processDataToPassports(data);

    return passports.reduce(
        (count, passport) => count + isPassportValidByRules(passport, rules),
        0
    );
};

console.log(computeCountOfValidPassports(data, rules));
