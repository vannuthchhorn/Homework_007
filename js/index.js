const DATE_TIME = document.querySelector("#date");
const LIST_INFO = document.querySelector("#list");
const INPUT_INFO = document.querySelector("#input");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
// show time from US
const NOWADAY = new Date();
DATE_TIME.innerHTML = NOWADAY.toLocaleString('en-US', options);

// know key Enter
document.addEventListener("keyup", event =>{
    if(event.code =="Enter"){
        const putValue = INPUT_INFO.value;
        if(putValue){
            updateInfo(putValue);
            clearInput();
        }
    }
});
// clear information on input
function clearInput(){
    INPUT_INFO.value="";
}
// list of infomation
function updateInfo(item) {
     const code = `<li>
        <p class="text"><i class="material-icons">mode_edit</i> ${item}</p>
      </li>`;
    LIST_INFO.insertAdjacentHTML("beforeend" ,code);
}