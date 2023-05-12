const model = [
    {type: 'title', value:'Hello from JS'},
    {type: 'text', value: 'here we go with some text'},
    {type: 'collumns', value: [
        '1111111',
        '2222222',
        '3333333'
    ]}
]

const $site = document.querySelector("#site")

model.forEach(block => {
    console.log(block)
})