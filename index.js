// The Factory Pattern

addCouter = () => {
    let value = 0;

    const getValue = () => {
        return value;
    }

    const addValue = (amount) => {
        value = value + amount;
    }

    return {
        getValue: getValue,
        addValue: addValue
    }
}

const counter = addCouter();
console.log(counter.getValue());

counter.addValue(3);
console.log(counter.getValue());

counter.addValue(6);
console.log(counter.getValue());