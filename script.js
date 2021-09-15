const TODOLIST = document.getElementById("todolist");
const REMAINS = document.getElementById("remains");
const DATE = document.getElementById("date");
const DOW = document.getElementById("dow");
const ADD_BUTTON = document.getElementById("add_button");

function submit(v){
    console.log(v.value);
    const LI = document.createElement("li");
    const LABEL = document.createElement("label");
    LABEL.setAttribute("onclick" , "count_list()");
    const CHECKBOX = document.createElement("input");
    CHECKBOX.setAttribute("type" , "checkbox");
    const CHECK_ICON = document.createElement("span");
    CHECK_ICON.setAttribute("class" , "check_icon");
    CHECK_ICON.innerText = "L";
    const TEXT = document.createElement("span");
    TEXT.setAttribute("class" , "text");
    TEXT.innerText = v.value;
    const DEL = document.createElement("label");
    DEL.setAttribute("class" , "del");
    DEL.setAttribute("onclick" , "del(this)");

    LABEL.append(CHECKBOX , CHECK_ICON , TEXT)
    LI.append(LABEL , DEL);

    LI.style.height = "0px";
    LI.style.margin = "0px";
    LI.style.opacity = "0";
    TODOLIST.prepend(LI);
    count_list();
    v.value = "";
    ADD_BUTTON.checked = false;

    setTimeout(() => {
        LI.style.height = "30px";
        LI.style.margin = "12px 0px";
        LI.style.opacity = "1";
    }, 1);
}

function del(obj){

    obj.parentNode.style.opacity = "0";
    // obj.parentNode.style.color = "red";
    setTimeout(() => {
        obj.parentNode.style.height = "0px";    
        obj.parentNode.style.margin = "0px";
        
    }, 350);
    setTimeout(() => {
        obj.parentNode.remove();
        count_list();
    }, 700);
   

}

function count_list(){
    let count = 0;
    for(let i = 0; i<TODOLIST.children.length; i++){
        const state = TODOLIST.children[i].children[0].children[0].checked;
        // console.log(state);
        if(state == false){
            count ++;
        }
    }
    REMAINS.innerText =`할 일 ${count}개 남음`;
}
count_list();

function display_date(){
    const now = new Date();
    DATE.innerText = `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`

    const day = now.getDay();
    let temp;
    switch (day){
        case 0 : temp = "일요일"; break;
        case 1 : temp = "월요일"; break;
        case 2 : temp = "화요일"; break;
        case 3 : temp = "수요일"; break;
        case 4 : temp = "목요일"; break;
        case 5 : temp = "금요일"; break;
        case 6 : temp = "토요일"; break;
    }
    DOW.innerText = temp;
}
display_date();