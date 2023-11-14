const cont = document.querySelector('#container');
const para = document.createElement('p');
para.textContent = 'hello world';
cont.appendChild(para);

const hblue  = document.createElement('h3');
hblue.style.cssText = 'color:blue';
hblue.textContent = 'i am blue h3';
cont.appendChild(hblue);

const div = document.createElement('div')
div.classList.add('divne');
cont.appendChild(div);

const h1d = document.createElement('h1');
h1d.textContent = "I'm in a div";
div.appendChild(h1d);
const pd = document.createElement('p');
pd.textContent = "Me too";
div.appendChild(pd);