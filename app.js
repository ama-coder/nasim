//load particle
particlesJS.load("particles-js","particles.json",function () {

        swch("login");

})
//footer link touch animation
function addHover(elm = document.createElement('img')) {

        elm.classList.add('hover');

}
function removeHover(elm = document.createElement('img')) {

        elm.classList.remove('hover');

}
// animation of switch between register and login
var current_component = "login"
function swch (name) {

        switch (name) {
                case "register": {
                        
                        document.querySelector("#login").setAttribute("animation","animate-out-left") ;
                        setTimeout(() => {
                                document.querySelector("#login").classList.remove("show")
                        }, 2000);

                        document.querySelector("#register").classList.add("show")
                        document.querySelector("#register").setAttribute("animation","animate-in-right") ;

                        
                }
                        

                        break;
                case "login" : {

                        document.querySelector("#register").setAttribute("animation","animate-out-right");
                        setTimeout(() => {
                                document.querySelector("#register").classList.remove("show")
                        }, 2000);

                        document.querySelector("#login").classList.add("show")
                        document.querySelector("#login").setAttribute("animation","animate-in-left") ;

                }
        
                default:
                        break;
        }

}