let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'سنگ' : {
        'سنگ' : 'draw',
        'قیچی' : 'win',
        'کاغذ' : 'lose'},
    'قیچی' : {
        'سنگ' : 'lose',
        'قیچی' : 'draw',
        'کاغذ' : 'win'},
    'کاغذ' : {
        'سنگ' : 'win',
        'قیچی' : 'lose',
        'کاغذ' : 'draw'}}
function checker(input){
    let choices = ["سنگ", "کاغذ", "قیچی"];
    let num = Math.floor(Math.random()*3);
    document.getElementById("user_choice").innerHTML = 
    ` انتخاب شما <span> ${input} </span>`;
    document.getElementById("comp_choice").innerHTML = 
    ` انتخاب کامپیوتر <span> ${choices[num]} </span>`;
    let computer_choice = choices[num];
    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "شما برنده شدید";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "شما باختید";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "مساوی";
            break;}
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;}