const createRobot = document.querySelector("#create-robot");
const robotName = document.querySelector('#robot-name');
const robotType = document.querySelector('#robot-type');
const robotColor = document.querySelector('#robot-color');
const robotJump = document.querySelector('#jump');
const robotTalk = document.querySelector('#talk');
const robotBlink = document.querySelector('#blink');
const robotPhrase = document.querySelector('#robot-phrase');



const robots = [];


robotTalk.addEventListener("change", () => {
  robotTalk.checked ? robotPhrase.disabled = false : robotPhrase.disabled = true;
})


createRobot.addEventListener("click", (event) => {
  if (robotName.value === "" || robotType.value === "" || robotColor.value === "") {
    alert('You need to fill all the required fields (*)')
  }
  else if (robotTalk.checked && robotPhrase.value === "") {
    alert("Please input a phrase");
  }

  else {
    const robot = {
      name: robotName.value,
      type: robotType.value,
      color: robotColor.value,
      jump: robotJump.checked,
      blink: robotBlink.checked,
    }
    if (robotTalk.checked) {
      robot.phrase = robotPhrase.value;
    }

    robots.push(robot);
    robotName.value = "";
    robotType.value = "";
    robotColor.value = "#e96126";
    robotPhrase.value = "";
    console.log(robots);
  }

  event.preventDefault();
})
