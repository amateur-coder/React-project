console.log('App.js is running');
 
// JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

 const option = e.target.elements.option.value;

 if(option) {
     app.options.push(option);
     e.target.elements.option.value = '';
     render();
 }
};

const onRemoveAll = () => {
    app.options = [];
   render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

//const numbers = [55, 52, 1000];

const render = () => {
    const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
          <p>{app.options.length}</p>
          <button disabled={app.options.length === 0} onClick ={onMakeDecision}>What should I do ?</button>
          <button onClick ={onRemoveAll}>Remove All</button>
          {
              /*numbers.map((number) => {
                  return <p key={number}>Number: {number}</p>;
              })*/
          }
          <ol>
          {
           app.options.map((option) => <li key={option}>{option}</li>)
          }
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
         </form>
        </div>
       );
       ReactDOM.render(template, appRoot);
};

render();