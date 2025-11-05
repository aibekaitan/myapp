const numbers = [1,2,3,4,5,6]

// numbers.push(100)
console.log(numbers)

const nNumbers= [];
for (let number of numbers){
    nNumbers.push(number);
}
nNumbers.push(100)
console.log(nNumbers);
// const numbers = [1, 2, 3, 4, 5];

// 1. slice
const copy1 = numbers.slice();

// 2. structuredClone (глубокая копия, если элементы простые)
const copy2 = structuredClone(numbers);

// 3. JSON (глубокая копия, но ломает даты, функции и undefined)
const copy3 = JSON.parse(JSON.stringify(numbers));

// 4. toSpliced (создаёт копию и даёт возможность изменять)
const copy4 = numbers.toSpliced();

// 5. Array.from
const copy5 = Array.from(numbers);

// 6. map
const copy6 = numbers.map(n => n);

// 7. Object.values (если numbers — обычный массив, то тоже копия)
const copy7 = Object.values(numbers);

// 8. toReversed() (создаёт копию перевёрнутую)
const copy8 = numbers.toReversed();

// 9. toReversed().reverse() (получается копия в обычном порядке)
const copy9 = numbers.toReversed().reverse();

// 10. filter (если условие true — копирование 1 в 1)
const copy10 = numbers.filter(n => true);

// 11. reduce
const copy11 = numbers.reduce((acc, el) => {
    acc.push(el);
    return acc;
}, []);

// 12. spread
const copy12 = [...numbers];


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]
//create
const newUser  = {
    id: 5,
    name: "John",
    isStudent: true
}
const nextUsers = [...users, newUser];

const userID = 4;
//update
const nextUsers2 = nextUsers.map((user) => user.id === userID ? {...user, name: "Helen"} : user);
console.log(nextUsers2);
//delete
const deleteUserId = 3;
const nextUsers3 = nextUsers2.filter((user) => user.id !== deleteUserId);

const copyUsers = [...users];

console.log(copyUsers===users);
console.log(copyUsers[0]===users[0]);

const deepCopy = structuredClone(users);

console.log(deepCopy===users);
console.log(deepCopy[0]===users[0]);

const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
}

const deepDeepCopy = structuredClone(users);
const halfDeepCopy = {...superUser, address : {...superUser.address, suite : 'Suite 200'}};
