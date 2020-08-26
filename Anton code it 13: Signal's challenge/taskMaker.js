/*
Task Maker

CodeSignal supports different challenge types. One of them asks you to find a bug 
on a single line of the given code, usually referred to as a DEBUGGING challenge. 
Behind the scenes, we correctly implement each challenge ourselves and then use 
special comments with specific prefixes to introduce the buggy lines. 

As you can see, each of the special comments looks like this:

<spaces>//DB <id>//<buggy line>

where <spaces> is a string consisting of zero or more spaces (for indentation), 
DB indicates that this comment is for a DEBUGGING challenge (let's assume this is 
the only type we support), id is a positive integer that helps us enumerate these 
and <buggy line> is some code that's almost identical to the line to be replaced 
but with an inserted bug (that is guaranteed not to contain any '/' symbols).

When importing these to our database, each of the special comments is used to 
create a debugging challenge. The importing script looks for the last 
non-special-comment line above the special comment and replaces it with 
"<spaces><buggy line>" while removing all the other special comments from 
the code. Examples below can help clarify this process further.

Your task is to produce DEBUGGING challenges given source code that includes 
the special comments and the id of the desired DEBUGGING challenge.

Link to the description: https://app.codesignal.com/company-challenges/codesignal/eCqB5Hx5QjbWi2PPQ
Link to the live coding: https://youtu.be/srcZTNFmqvI
*/

function taskMaker(source, challengeId) {
    const tag = `//DB ${challengeId}//`;
    const emptyTag = '//DB';

    return source.reduce((acc, line) => {
        if (line.includes(tag)) {
            acc[acc.length - 1] = line.replace(tag, '');
        } else if (!line.includes(emptyTag)) {
            acc.push(line);
        }
        
        return acc;
    }, []);
}
