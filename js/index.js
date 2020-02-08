const DATE_TIME = document.querySelector("#date");
const LIST_INFO = document.querySelector("#list");
const INPUT_INFO = document.querySelector("#input");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const NOWADAY = new Date();
DATE_TIME.innerHTML = NOWADAY.toLocaleString('en-US', options);

document.addEventListener("keyup", event =>{
    if(event.code =="Enter"){
        const putValue = INPUT_INFO.value;
        if(putValue){
            updateInfo(putValue);
            clearInput();
        }
    }
});
function clearInput(){
    INPUT_INFO.value="";
}
function updateInfo(item) {

     const code = `<li>
      <i class="fa fa-pencil" aria hidden="true"></i> 
          <p class="text">${item}</p>
      </li>`;
    LIST_INFO.insertAdjacentHTML("beforeend" ,code);
    }