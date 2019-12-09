import data from '../Simple/data.mjs';

let memory = data;

const TARGET = 19690720;

const getOperands = (position) => [
    memory[position],
    memory[position + 1],
    memory[position + 2],
    memory[position + 3]
];

const compute = (noun, verb) => {
    memory = [...data];

    memory[1] = noun;
    memory[2] = verb;

    iterate: for (let i = 0; i < memory.length; i += 4) {
        const [op, a, b, c] = getOperands(i);

        switch (op) {
            case 1:
                memory[c] = memory[a] + memory[b];
                break;
            case 2:
                memory[c] = memory[a] * memory[b];
                break;
            case 99:
                break iterate;
        }
    }

    return [memory[0], 100 * noun + verb];
}

const solve = () => {
    outer: for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            const [result, answer] = compute(noun, verb);

            if (result === TARGET) {
                console.log(answer);
                break outer;
            }
        }
    }
};

solve();