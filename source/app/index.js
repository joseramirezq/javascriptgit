const UI = require('./interface');
const Github= require('./pedirgithub');

const {client_id, cliente_secret }=require('./config.json');

const github= new Github(client_id, cliente_secret);
const ui=new UI();

const userForm=document.getElementById('userForm');

userForm.addEventListener('submit',(e)=>{
    const textoImput=document.getElementById('textSearch').value;
    if(textoImput!==''){
        github.fetchuser(textoImput)
        .then(data=>{
            if(data.message ==='Not Found'){
                console.log('Esl usuario no existe');
            }
            else{
                ui.showProfile(data);
            }
           

        })
    }
    e.preventDefault();
});
