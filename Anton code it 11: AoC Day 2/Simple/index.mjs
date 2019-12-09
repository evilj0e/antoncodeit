import data from './data.mjs';

const getOperands = (position) => [
    data[position],
    data[position + 1],
    data[position + 2],
    data[position + 3]
];

const solve = () => {
    data[1] = 12;
    data[2] = 2;

    iterate: for (let i = 0; i < data.length; i += 4) {
        const [op, a, b, c] = getOperands(i);

        switch (op) {
            case 1:
                data[c] = data[a] + data[b];
                break;
            case 2:
                data[c] = data[a] * data[b];
                break;
            case 99:
                break iterate;
        }
    }

    console.log(data[0]);
};

solve();

