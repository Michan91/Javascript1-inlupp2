const form = document.querySelector('#attgöra');
const input = document.querySelector('#attgöraInput');
const output = document.querySelector('#output');
const feedback = document.querySelector('#feedback')

let attGöra = [];

const fetchAttgöra = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    attGöra = data;
    listAttgöra();
}

fetchAttgöra();

const listAttgöra = () => {
    output.innerHTML = ''
    attGöra.forEach(attgöra => {
    output.appendChild(createAttgöraElement(attgöra))
    })
}

const createAttgöraElement = attgöra => {
    
    let kort = document.createElement('div');
    kort.classList.add('attgöra');

    let title = document.createElement('p');
    title.classList.add('attgöra-title');
    title.innerText = attgöra.title

    let button = document.createElement('button');
    button.classList.add('läggtillattgöra');
    button.innerText = 'TA BORT'

    kort.appendChild(title);
    kort.appendChild(button);

    button.addEventListener('click', () => removeAttgöra(attgöra.id, kort))
    return kort;
}

function removeAttgöra(id, attgöra) {
  attGöra = attGöra.filter(attgöra => attgöra.id !== id)
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'DELETE',
    })
    .then(res => {
      res.status}); 
    listAttgöra();
    
    // DELITE FROM DB 
    // if???? status är == 200 do what??
    console.log(attGöra)
}

const createNewAttgöra = title => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          title,
          completed: false
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        attGöra.unshift(data);
        listAttgöra();
      })
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        if(input.value !== '') {
          createNewAttgöra(input.value);
          input.value = '';
          feedback.innerText = '';
          input.focus()
        }
        else {
          feedback.innerText = 'Du måste skriva in något att göra!';
          input.focus()
        }
      })

// const deliteAttGöra = attgöra => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'DELETE',
//     });

// }