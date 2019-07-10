const Start = document.querySelector('.Start');
const Stop = document.querySelector('.Stop');
const StopWatch = document.querySelector('.StopWatch');



var min = 25;
var second = 00;
var millisecond = 100;
var secposition = '';

function StartStopWatch(){
    
  var interval;
  
  this.start = ()=> {  
         
   interval =  setInterval(()=>{
        millisecond --;
        
        if(millisecond <= 0){
            second--;
            millisecond = 100;
        }
        if(second <= 0){  
            min--;
            second = 59 ;
        }

        if( second == 59 && millisecond == 100 && min == -1 ){
            stop();
            min = 5;
            second = 0;
            millisecond = 0;                   
        }

        //second position
        if(second<10){
            secposition = '0';
        }    
        StopWatch.innerHTML=`${min}:${secposition}${second}.${millisecond}`;
    },10);
    this.isOn = true;

    }
    

   this.stop =()=>{
       clearInterval(interval);
       this.isOn = false;
   }

};


var stopwatch = new StartStopWatch();

function start(){
    Start.innerHTML = `<span style="color:#ffedf7;"><i class="far fa-stop-circle fa-5x"></i></span>`;
    stopwatch.start();
}

function stop(){
    Start.innerHTML = `<span style="color:#ffedf7;"><i class="far fa-play-circle fa-5x"></i></span>`;
    stopwatch.stop();

}


Start.addEventListener('click',function(){
    stopwatch.isOn?stop():start();
},false);

//----todo list---------------------

const todo = document.querySelector('.hsuan');
const createTodo = document.querySelector('.CreateToDoList');


let Todolist = ['THE FIRST THING TO DO TODAY', 'THE SECOND THING TO DO TODAY','THE THIRD THING TO DO TODAY', 'THE FOURTH THING TO DO TODAY' ];

function ShowTodoList(){
    let str = '';
    Todolist.map((item)=>
      str+=` <li class='listItem'>
                 <div class="listCircle"></div>
                 <span class='listfont'>${item}</span>
                 <i class="far fa-play-circle"></i>
            </li>`
    
    );
   todo.innerHTML = `${str}`;
}


function AddNewMission(e){
    e.preventDefault();
    let InputValue = document.getElementById('NewMission');
    Todolist.push(InputValue.value);
    console.log(InputValue.value);
    ShowTodoList();


    for(let i = 0;i<Todolist.length;i++){
    
        let listbotton = document.querySelectorAll('.listCircle')[i];
        let listToggleBotton = document.querySelectorAll('.listfont')[i];
        
        function CancelThing(){
            listbotton.classList.toggle('listcrieleToggle');
            listToggleBotton.classList.toggle('fontstrikeThrough')
        }
        
        listbotton.addEventListener('click',CancelThing,false);
        }
    

}



createTodo.addEventListener('click',AddNewMission,false);

//------todolist circle-------------------
for(let i = 0;i<Todolist.length;i++){
    
let listbotton = document.querySelectorAll('.listCircle')[i];
let listToggleBotton = document.querySelectorAll('.listfont')[i];

function CancelThing(){
    listbotton.classList.toggle('listcrieleToggle');
    listToggleBotton.classList.toggle('fontstrikeThrough')
}

listbotton.addEventListener('click',CancelThing,false);
}



//----------------------------

// var timer = document.getElementById('timer');
// var toggleBtn = document.getElementById('toggle');
// var resetBtn = document.getElementById('reset');

// var watch = new Stopwatch(timer);

// function start() {
//   toggleBtn.textContent = 'Stop';
//   watch.start();
// }

// function stop() {
//   toggleBtn.textContent = 'Start';
//   watch.stop();
// }

// toggleBtn.addEventListener('click', function() {
//   watch.isOn ? stop() : start();
// });

// resetBtn.addEventListener('click', function() {
//   watch.reset();
// });


//     function Stopwatch(elem) {
//         var time = 0;
//         var offset;
//         var interval;
      
//         function update() {
//           if (this.isOn) {
//             time += delta();
//           }
          
//           elem.textContent = timeFormatter(time);
//         }
      
//         function delta() {
//           var now = Date.now();
//           var timePassed = now - offset;
      
//           offset = now;
      
//           return timePassed;
//         }
      
//         function timeFormatter(time) {
//           time = new Date(time);
      
//           var minutes = time.getMinutes().toString();
//           var seconds = time.getSeconds().toString();
//           var milliseconds = time.getMilliseconds().toString();
      
//           if (minutes.length < 2) {
//             minutes = '0' + minutes;
//           }
      
//           if (seconds.length < 2) {
//             seconds = '0' + seconds;
//           }
      
//           while (milliseconds.length < 3) {
//             milliseconds = '0' + milliseconds;
//           }
      
//           return minutes + ' : ' + seconds + ' . ' + milliseconds;
//         }
      
//         this.start = function() {
//           interval = setInterval(update.bind(this), 10);
//           offset = Date.now();
//           this.isOn = true;
//         };
      
//         this.stop = function() {
//           clearInterval(interval);
//           interval = null;
//           this.isOn = false;
//         };
      
//         this.reset = function() {
//           time = 0;
//           update();
//         };
      
//         this.isOn = false;
//       }