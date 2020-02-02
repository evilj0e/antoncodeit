/*
Task

Dropbox holds a competition between schools called CampusCup. If you verify an email address from
a college, university, or higher education institution, you earn 20 points toward your school's
overall ranking. When a school receives at least 100 points, all of its registered members receive
an additional 3 Gb of bonus space each. When the school receives at least 200 points, its registered
members receive an additional 8 Gb. If the school receives at least 300 points, its members receive
an additional 15 Gb. And finally, when a school receives at least 500 points, members receive
an additional 25 Gb each.

You are given n registered emails, all of them unique. Each email has the following
format: "<name>@<domain>", where <name> and <domain> are non-empty strings consisting of lowercase
letters and a '.'. Identical domains correspond to the same school and vice versa.

Your task is to make a scoreboard, i.e. to sort the schools according to the amount of bonus space
they each received (per student not in total). School A must be higher in the standings than school
B if A received more space than B, or if they received equal number of gigabytes but the domain
string of school A is lexicographically smaller than the one of school B.
*/

function campusCup(emails) {
    const rawData = emails
        .reduce((acc, email) => {
            const [,domain] = email.split('@');
            acc[domain] = Math.min((acc[domain] || 0) + 20, 500);
        
            return acc;
        }, {});

    const combinedData = Object
        .entries(rawData)
        .reduce((map, [domain, points]) => {
            const key = Object
                .keys(map)
                .find(
                    (key, index) => +key <= points && points < (Object.keys(map)[index + 1] || Infinity)
                );
            
            map[key].push(domain);
            
            return map;
        },
        {
            '0':[],
            '100':[],
            '200':[],
            '300':[],
            '500':[],
        });
    
    const superCombinedDataKeys = Object.keys(combinedData);
    superCombinedDataKeys.sort((a, b) => b - a);
    
    return superCombinedDataKeys
        .reduce((acc, name) => acc.concat(combinedData[name].sort()), []);
}
