/*
First, validate whether a string is a valid IPv6 address. 
If it is not valid, return False. If it is valid, return 
the same address reformatted to the shortest possible length, 
in all lowercase characters.

An IPv6 address is a hexidecimal representation of a 128-bit 
number. It is divided into eight groups of digits containing 
two octets (16 bits) each, separated by colons. In other words, 
each of the 8 groups will range from 0 to ffff.

Each group must contain one, two, three, or four characters. 
Leading zeroes in a group can be omitted. For optimal length, 
they must be omitted.

One or more consecutive groups of zeros can be eliminated, 
leaving only two colons ("::"). This can be done only once 
per address. For optimal length, the longest consecutive 
group of zeros should be eliminated this way. Also, in a correct 
response, only two or more consecutive groups should be 
eliminated this way; a single group of zero should be left as-is.

Leading and trailing double-colons (e.g. ::1, 2002:1717:e6d9::) 
are legal, and, in some solutions, required. An address of all 
zeros should be represented as just "::".

Lowercase and uppercase hexadecimal digits (a-f, A-F) are 
legal and may even be mixed. The returned address should 
contain only lowercase characters.

Link to the description: http://bit.ly/antoncodeit-description-6
Link to the live coding: http://bit.ly/antoncodeit-live-6
*/

function contractV6(address) {
    let processedAddress = address;

    processedAddress = address.startsWith("::")
        ? processedAddress.slice(1)
        : processedAddress;
    processedAddress = address.endsWith("::")
        ? processedAddress.slice(0, processedAddress.length - 1)
        : processedAddress;

    let groups = processedAddress.split(":");

    const hasInvalidGroup = groups.some(
        group => group && !group.match(/^[a-fA-F0-9]{1,4}$/)
    );
    const hasInvalidGroupCount =
        groups.length > 8 || (!address.includes("::") && groups.length < 8);
    const hasInvalidSpreadCount =
        groups.filter(group => group === "").length > 1;

    if (hasInvalidGroup || hasInvalidGroupCount || hasInvalidSpreadCount) {
        return false;
    }

    const spreadIndex = groups.indexOf("");

    if (spreadIndex !== -1) {
        const additionalCount = 8 - groups.filter(group => group !== "").length;

        groups.splice(spreadIndex, 1, ...Array(additionalCount).fill("0"));
    }

    groups = groups.map(group =>
        parseInt(group, 16)
            .toString(16)
            .toLowerCase()
    );

    let startIndex = -1;
    let max = 0;
    let currentStartIndex = 0;
    let currentCounter = 0;

    for (let i = groups.length - 1; i >= 0; i--) {
        if (groups[i] === "0") {
            currentStartIndex = i;
            currentCounter++;
        } else {
            currentCounter = 0;
        }

        if (max <= currentCounter) {
            max = currentCounter;
            startIndex = currentStartIndex;
        }
    }

    if (startIndex !== -1 && max > 1) {
        const isStarting = startIndex === 0;
        const isEnding = startIndex + max === groups.length;

        const delimeter =
            isStarting && isEnding ? "::" : isStarting || isEnding ? ":" : "";

        groups.splice(startIndex, max, delimeter);
    }

    return groups.join(":");
}
