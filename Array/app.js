let data = [
    {
        name: 'Matero',
        age: '30'
    },
    {
        name: 'Sarah',
        age: '26'
    },
    {
        name: 'John',
        age: '21'
    },
    {
        name: 'Isaac',
        age: '32'
    },
    {
        name: 'Ben',
        age: '27'
    },
    {
        name: 'Aaron',
        age: '19'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
})

info.innerHTML = details.join('\n')