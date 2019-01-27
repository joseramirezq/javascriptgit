class UI{
    constructor(){
        this.profile=document.getElementById('profile');

    }
    showProfile(user){
        console.log(user);
        this.profile.innerHTML=`
            <div class="card mt-2 animated bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                    <a href="${user.html_url}"  target="_blank" class="btn btn-primary btn-block">Vista Perfil</a>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-primary">Sigue a: ${user.following}</span>
                    <span class="badge badge-warning d-block">Company: ${user.company}</span>
                </div>
                
            </div>
        `;
    }
}
module.exports=UI;