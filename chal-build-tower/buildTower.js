//regressing for looop

const tower = num => {
    let maxLength = (num * 2) - 1;
    let tower = [];
    for (let i = 1; i <= num ; i++) {
        let stars = (i * 2) - 1;
        let spaces = (maxLength - stars)/2;
        let newStr = `${' '.repeat(spaces)}${'*'.repeat(stars)}${' '.repeat(spaces)}`
        tower.push(newStr);
    }
    return tower;
}


// console.log(tower(2))
// console.log(tower(5))
// console.log(tower(10))

const towers = num => {
    let tower = [];
    for (let i = 1; i <= num ; i++) {
        tower.push(`${' '.repeat((((num * 2) - 1) - ((i * 2) - 1))/2)}${'*'.repeat((i * 2) - 1)}${' '.repeat((((num * 2) - 1) - ((i * 2) - 1))/2)}`)
    }
    return tower;
}


console.log(towers(8))

const moreTowers = num => {
    let tower = [];
    for(let i = 0; i < num; i++) {
        let spaces = ' '.repeat(num - 1 - i);
        let stars = '*'.repeat(1 + (i * 2));
        tower.push(spaces + stars + spaces);
    }
    return tower
}

console.log(moreTowers(10));