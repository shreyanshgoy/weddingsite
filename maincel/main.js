// const sectionNavigator = name =>{
//     let sections = document.querySelectorAll('section');
//     let header = document.querySelector('header');
//     sections.forEach(section => {
//        section.classList.remove('section-show');
//        if(section.classList.contains(name)){
//            section.classList.add('section-show');
//            header.classList.add('active'); 
//        }
//     });
// };

// window.addEventListener('load', () => {
//     const navlist = document.querySelectorAll('.nav-btn');
//     navlist.forEach(nav => {    
//         nav.addEventListener('click', function (e){
//             e.preventDefault();
//             navlist.forEach(el=>{el.classList.remove('active')});
//             this.classList.add('active');
//             sectionNavigator(this.getAttribute('data-target'));
//             screen.width < 768 && toggleMenu();
//         });
//     });
// });