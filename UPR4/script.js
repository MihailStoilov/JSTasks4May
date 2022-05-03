const createRobot = document.querySelector("#create-robot");
const robotName = document.querySelector('#robot-name');
const robotType = document.querySelector('#robot-type');
const robotColor = document.querySelector('#robot-color');
const robotJump = document.querySelector('#jump');
const robotTalk = document.querySelector('#talk');
const robotBlink = document.querySelector('#blink');
const robotPhrase = document.querySelector('#robot-phrase');
const body = document.querySelector("body");
const btns = document.querySelector('.btns');
const btn = document.querySelectorAll(".btn");

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

    function createDynamicRobot() {
      const newSection = document.createElement("section");
      newSection.classList.add("factory-section", "active");
      newSection.setAttribute("id", `slide-${robots.length + 1}`);

      const createSection = document.querySelector('.header');
      createSection.insertAdjacentElement("afterend", newSection);

      const newSecionHeader = document.createElement("div");
      newSecionHeader.classList.add("section-header");
      newSection.appendChild(newSecionHeader);

      const newHeading = document.createElement("div");
      newHeading.classList.add("heading");
      newSecionHeader.appendChild(newHeading);

      const newSecondaryHeading = document.createElement("h2");
      newSecondaryHeading.classList.add("secondary-heading");
      newSecondaryHeading.textContent = robotType.options[robotType.selectedIndex].text;
      newHeading.appendChild(newSecondaryHeading);

      const newArr = document.createElement("div");
      newArr.classList.add("arr1");
      newHeading.appendChild(newArr);

      const newWrapper = document.createElement("div");
      newWrapper.classList.add("content-wrapper");
      newSection.appendChild(newWrapper);

      const robotSide = document.createElement("div");
      robotSide.classList.add("robot-side");
      newWrapper.appendChild(robotSide);

      const robotBox = document.createElement("div");
      robotBox.classList.add("robot");
      robotSide.appendChild(robotBox);

      const robotHead = document.createElement("div");
      robotHead.classList.add("head");
      robotBox.appendChild(robotHead);

      const robotEyes = document.createElement("div");
      robotEyes.classList.add("eyes");
      robotHead.appendChild(robotEyes);

      const robotEye1 = document.createElement("div");
      robotEye1.classList.add("eye");
      robotEyes.appendChild(robotEye1);
      const robotEye2 = document.createElement("div");
      robotEye2.classList.add("eye");
      robotEyes.appendChild(robotEye2);

      const robotMouth = document.createElement("div");
      robotMouth.classList.add("mouth");
      robotHead.appendChild(robotMouth);

      const robotBody = document.createElement("div");
      robotBody.classList.add("robot-body");
      robotBox.appendChild(robotBody);

      const robotChest = document.createElement("div");
      robotChest.classList.add("chest");
      robotChest.style.borderTop = `5vw solid ${robot.color}`;
      robotBody.appendChild(robotChest);

      const robotRightHand = document.createElement("div");
      robotRightHand.classList.add("right-hand");
      robotBody.appendChild(robotRightHand);

      const robotLeftHand = document.createElement("div");
      robotLeftHand.classList.add("left-hand");
      robotBody.appendChild(robotLeftHand);

      if (robot.type === "female") {
        const robotSkirt = document.createElement("div");
        robotSkirt.classList.add("skirt");
        robotSkirt.style.borderBottom = `2.5vw solid ${robot.color}`;
        robotBox.appendChild(robotSkirt);
      }

      const robotLegs = document.createElement("div");
      robotLegs.classList.add("legs");
      robotBox.appendChild(robotLegs);

      const robotLeftLeg = document.createElement("div");
      robotLeftLeg.classList.add("left-leg", "leg")
      robotLegs.appendChild(robotLeftLeg);

      const robotRightLeg = document.createElement("div");
      robotRightLeg.classList.add("right-leg", "leg")
      robotLegs.appendChild(robotRightLeg);

      const robotNameEl = document.createElement("p");
      robotNameEl.classList.add("robot-name");
      robotNameEl.textContent = robot.name;
      robotSide.appendChild(robotNameEl);

      const textSide = document.createElement("div");
      textSide.classList.add("text-side");
      newWrapper.appendChild(textSide);

      const firstParagraph = document.createElement("div");
      firstParagraph.classList.add("first", "paragraph");
      textSide.appendChild(firstParagraph);


      const paragraphOne = document.createElement("p");
      paragraphOne.textContent = "Paragraph text here. Text-align on left, 3% space from right border. Text is only 2 lines and ends with three dots ... because it too long. On hover full text is shown as a tooltip. First letter is bold."
      firstParagraph.appendChild(paragraphOne);

      const secondParagraph = document.createElement("div");
      secondParagraph.classList.add("second", "paragraph");
      textSide.appendChild(secondParagraph);

      const paragraphTwo = document.createElement("p");
      paragraphTwo.innerHTML = "<em>Paragraph</em> text here. Text justified, 6% space from right border. Text is only 2 lines and ends with three dots ... because it too long. On hover full text is shown. First word is <em>Italic</em>."
      secondParagraph.appendChild(paragraphTwo);

      const thirdParagraph = document.createElement("div");
      thirdParagraph.classList.add("third", "paragraph");
      textSide.appendChild(thirdParagraph);

      const imgPara = document.createElement("img");
      imgPara.src = "goodluck-img.jpg";
      imgPara.alt = "good-luck-img";
      thirdParagraph.appendChild(imgPara);

      const paragraphThree = document.createElement("p");
      paragraphThree.textContent = "Paragraph text here. Text align on left. 9% from right border. Image on left side."
      thirdParagraph.appendChild(paragraphThree);
    }

    createDynamicRobot();

    if (robotBlink.checked) {
      const robotEyeEl = document.querySelector(".eyes").firstElementChild;
      robotEyeEl.classList.add("blink");
    }

    if (robotJump.checked) {
      const robotLegs = document.querySelectorAll(".leg");
      robotLegs.forEach((leg) => {
        leg.classList.add("jump");
      })
    }

    if (robots.length >= 1) {
      const factorySectionEl = document.querySelector(`#slide-${robots.length}`)
      factorySectionEl.classList.remove("active");
    }


    if (robotTalk.checked) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      const robotBox = document.querySelector(".robot");
      robotBox.appendChild(bubble);
      const bubbleText = document.createElement("p");
      bubbleText.classList.add("bubble-text");
      robot.phrase = robotPhrase.value;
      bubbleText.textContent = robot.phrase;
      bubble.appendChild(bubbleText);
      const robotMouthEl = document.querySelector(".mouth");
      robotMouthEl.classList.add("speak");
      setInterval(() => {
        bubble.classList.add("remove");
        robotMouthEl.classList.remove("speak");
      }, 10000);
    }

    robots.push(robot);
    robotName.value = "";
    robotType.value = "";
    robotColor.value = "#e96126";
    robotPhrase.value = "";

    const btnNext = document.querySelector(".next-btn");
    const btnPrev = document.querySelector(".prev-btn");

    btnNext.addEventListener("click", () => {
      plusSlides(1);
    })

    btnPrev.addEventListener("click", () => {
      plusSlides(-1);
    })


    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/prev controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }



    function showSlides(n) {
      let i;
      let factorySections = document.querySelectorAll(".factory-section");
      if (n > factorySections.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = factorySections.length }
      for (i = 0; i < factorySections.length; i++) {
        factorySections[i].classList.remove("active");
      }

      factorySections[slideIndex - 1].classList.add("active");
    }

    const factorySections = document.querySelectorAll(".factory-section");
    if (factorySections.length > 0) {

      btns.classList.add("btns-active");

    }

    btn.forEach((btn) => {
      if (factorySections.length < 2) {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    })
  }

  event.preventDefault();
})
