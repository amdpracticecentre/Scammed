const scenario = {
  startNodeId: "stage-0",
  nodes: {
    "stage-0": {
      userMessages: [
        "hi I was scammed and I need to get my pets back can you please help"
      ],
      options: [
        {
          id: "stage-0-opt-0",
          label: "Ask for the username of the user who scammed them.",
          youText: "Can you share the username of the user who scammed you?",
          feedback: "Not quite. The first step is to claim the ticket so the user knows it is being handled.",
          correct: false,
          next: "stage-0"
        },
        {
          id: "stage-0-opt-1",
          label: "Claim the ticket.",
          youText: "Claimed. I will handle this ticket for you now.",
          feedback: "Correct. The first step of handling any ticket is to claim it.",
          correct: true,
          next: "stage-1"
        },
        {
          id: "stage-0-opt-2",
          label: "Escalate the ticket.",
          youText: "I am escalating this ticket now.",
          feedback: "Escalations should only be made where necessary, which is not needed here.",
          correct: false,
          next: "stage-0"
        }
      ]
    },
    "stage-1": {
      userMessages: [
        "You click the claim button within the ticket."
      ],
      options: [
        {
          id: "stage-1-opt-0",
          label: "Close the ticket.",
          youText: "I am closing this ticket.",
          feedback: "You should not close a ticket unless you have a valid reason.",
          correct: false,
          next: "stage-1"
        },
        {
          id: "stage-1-opt-1",
          label: "Tell them that nothing can be done.",
          youText: "Unfortunately, nothing can be done.",
          feedback: "Not correct. They cannot recover pets here, but action can still be taken on the reported user.",
          correct: false,
          next: "stage-1"
        },
        {
          id: "stage-1-opt-2",
          label: "Ask whether this happened in Discord or purely in-game.",
          youText: "Could you please clarify whether this started in Discord, or if it was purely in-game?",
          feedback: "Correct. This determines whether Discord moderation is required.",
          correct: true,
          next: "stage-2"
        }
      ]
    },
    "stage-2": {
      userMessages: [
        "It started in Discord."
      ],
      options: [
        {
          id: "stage-2-opt-0",
          label: "Ask for the Discord username or ID of the scammer.",
          youText: "Please share their Discord username or ID.",
          feedback: "It is better to request an uncropped screenshot first because it gives evidence and usually includes the username.",
          correct: false,
          next: "stage-2"
        },
        {
          id: "stage-2-opt-1",
          label: "Ask for an uncropped screenshot.",
          youText: "Could you please provide an uncropped screenshot of your conversation with the user in Discord?",
          feedback: "Correct. This helps verify claims and often includes the Discord username.",
          correct: true,
          next: "stage-3"
        },
        {
          id: "stage-2-opt-2",
          label: "Close the ticket.",
          youText: "I am closing this ticket now.",
          feedback: "Do not close a ticket before providing appropriate help or guidance.",
          correct: false,
          next: "stage-2"
        }
      ]
    },
    "stage-3": {
      userMessages: [
        "The user sends a mobile screenshot showing a trust-trade DM request."
      ],
      options: [
        {
          id: "stage-3-opt-0",
          label: "Moderate the reported user.",
          youText: "I will review their modlogs and apply moderation for illegal trading based on prior offenses.",
          feedback: "Correct. Check modlogs and apply the correct action based on prior offenses.",
          correct: true,
          next: "stage-4"
        },
        {
          id: "stage-3-opt-1",
          label: "Tell them nothing can be done.",
          youText: "Nothing can be done in this case.",
          feedback: "Incorrect. With valid evidence, moderation action can be taken.",
          correct: false,
          next: "stage-3"
        },
        {
          id: "stage-3-opt-2",
          label: "Escalate the ticket to Helen.",
          youText: "I am escalating this to Helen.",
          feedback: "Only PC screenshots need escalation; mobile screenshots are generally handled directly.",
          correct: false,
          next: "stage-3"
        }
      ]
    },
    "stage-4": {
      userMessages: [
        "You can let the user know that all appropriate actions have been taken."
      ],
      options: [
        {
          id: "stage-4-opt-0",
          label: "Close the ticket.",
          youText: "I am closing this ticket now.",
          feedback: "Not yet. Since they were allegedly scammed in-game too, redirect them to support or #adopt-me-help first.",
          correct: false,
          next: "stage-4"
        },
        {
          id: "stage-4-opt-1",
          label: "Transfer the ticket to another moderator.",
          youText: "I will transfer this ticket to another moderator.",
          feedback: "Transfer can be valid if you are overwhelmed, but in this scenario the best next action is redirecting to support.",
          correct: false,
          next: "stage-4"
        },
        {
          id: "stage-4-opt-2",
          label: "Redirect them to support.",
          youText: "We cannot assist with this in-game. Please report it at playadopt.me/support or via #adopt-me-help.",
          feedback: "Correct. They can report the user to Uplift support staff.",
          correct: true,
          next: "stage-6"
        }
      ]
    },
    "stage-5": {
      userMessages: [
        "Keep in mind that cross-trading is not permitted and can result in moderation in Discord and in-game."
      ],
      options: [
        {
          id: "stage-5-opt-0",
          label: "Close the ticket.",
          youText: "Closing ticket now.",
          feedback: "Not yet. The user still needs to read all important information.",
          correct: false,
          next: "stage-5"
        },
        {
          id: "stage-5-opt-1",
          label: "Leave the ticket open.",
          youText: "I will leave this ticket open.",
          feedback: "Do not leave completed tickets open and clog the queue.",
          correct: false,
          next: "stage-5"
        },
        {
          id: "stage-5-opt-2",
          label: "Request to close the ticket.",
          youText: "I will use a close request so you can close after reading this information.",
          feedback: "Correct. A close request allows the user time to read everything before closure.",
          correct: true,
          next: "complete"
        }
      ]
    },
    "stage-6": {
      userMessages: [
        "While we can take action in Discord, we cannot assist in-game. Please visit https://www.playadopt.me/support (or use /tag support-gen)."
      ],
      options: [
        {
          id: "stage-6-opt-0",
          label: "Explain that cross-trading is not permitted (verbal warning).",
          youText: "Please note cross-trading is not permitted. This is a verbal warning.",
          feedback: "Correct. If they admit illegal trading while reporting, issue a verbal warning rather than direct moderation.",
          correct: true,
          next: "stage-5"
        },
        {
          id: "stage-6-opt-1",
          label: "Close the ticket.",
          youText: "I am closing this ticket now.",
          feedback: "Do not close a ticket without a valid reason.",
          correct: false,
          next: "stage-6"
        },
        {
          id: "stage-6-opt-2",
          label: "Moderate the user who made the ticket for cross-trading.",
          youText: "I will moderate you for cross-trading.",
          feedback: "In this situation, a verbal warning is the expected approach.",
          correct: false,
          next: "stage-6"
        }
      ]
    },
    complete: {
      userMessages: [
        "This concludes the User Scammed scenario. Well done."
      ],
      options: []
    }
  }
};

const splashScreen = document.getElementById("splash-screen");
const chatScreen = document.getElementById("chat-screen");
const beginBtn = document.getElementById("begin-btn");
const restartBtn = document.getElementById("restart-btn");
const chatLog = document.getElementById("chat-log");
const choicesEl = document.getElementById("choices");
const messageTemplate = document.getElementById("message-template");
const toast = document.getElementById("toast");

let activeNodeId = null;
let pendingNodeToken = 0;
const USER_TYPING_MS = 1300;
const YOU_TYPING_MS = 1650;

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function getTimeStamp() {
  return new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function pushMessage({ author, text, from = "bot", isSystem = false }) {
  const fragment = messageTemplate.content.cloneNode(true);
  const message = fragment.querySelector(".message");
  const authorEl = fragment.querySelector(".author");
  const timeEl = fragment.querySelector(".time");
  const bubbleEl = fragment.querySelector(".bubble");

  if (from === "user") {
    message.classList.add("user");
  }

  if (isSystem) {
    message.classList.add("system");
  }

  authorEl.textContent = author;
  bubbleEl.textContent = text;
  timeEl.textContent = getTimeStamp();

  chatLog.appendChild(fragment);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function showTypingIndicator({ author, from = "bot" }) {
  const wrapper = document.createElement("article");
  wrapper.className = "message typing";
  if (from === "user") {
    wrapper.classList.add("user");
  }

  wrapper.innerHTML = `
    <div class="avatar"></div>
    <div class="bubble-wrap">
      <div class="meta">
        <span class="author"></span>
        <span class="time">typing...</span>
      </div>
      <div class="bubble" aria-label="typing indicator">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;

  wrapper.querySelector(".author").textContent = author;
  chatLog.appendChild(wrapper);
  chatLog.scrollTop = chatLog.scrollHeight;
  return wrapper;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden", "show");
  void toast.offsetWidth;
  toast.classList.add("show");
  window.setTimeout(() => {
    toast.classList.add("hidden");
    toast.classList.remove("show");
  }, 2500);
}

function showWrongAnswerModal(feedback) {
  const modal = document.getElementById("wrong-answer-modal");
  const feedbackText = document.getElementById("feedback-text");
  feedbackText.textContent = feedback;
  modal.classList.remove("hidden");
  
  const closeBtn = document.getElementById("modal-close-btn");
  closeBtn.focus();
}

function hideWrongAnswerModal() {
  const modal = document.getElementById("wrong-answer-modal");
  modal.classList.add("hidden");
}

function renderOptions(node) {
  choicesEl.innerHTML = "";

  if (!node.options || node.options.length === 0) {
    const done = document.createElement("p");
    done.className = "channel-subtitle";
    done.textContent = "No more choices in this branch.";
    choicesEl.appendChild(done);
    return;
  }

  node.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = option.label;
    btn.addEventListener("click", () => handleChoice(option));
    choicesEl.appendChild(btn);
  });
}

async function goToNode(nodeId) {
  const node = scenario.nodes[nodeId];
  if (!node) {
    showToast(`Missing node: ${nodeId}`);
    return;
  }

  const myToken = ++pendingNodeToken;
  activeNodeId = nodeId;
  choicesEl.innerHTML = "";

  for (const line of node.userMessages || []) {
    const isSystemText = line.startsWith("You") || line.startsWith("The") || line.startsWith("While") || line.startsWith("Keep");
    
    if (!isSystemText) {
      const typing = showTypingIndicator({ author: "User", from: "bot" });
      await wait(USER_TYPING_MS);

      if (myToken !== pendingNodeToken) {
        typing.remove();
        return;
      }

      typing.remove();
    }
    
    pushMessage({ author: "User", text: line, from: "bot", isSystem: isSystemText });
    await wait(130);
  }

  renderOptions(node);
}

async function handleChoice(option) {
  const buttons = Array.from(choicesEl.querySelectorAll(".choice-btn"));
  const clicked = buttons.find((btn) => btn.textContent === option.label);
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  if (clicked) {
    clicked.classList.add(option.correct ? "correct" : "wrong");
  }

  if (!option.correct) {
    // Wrong answer: show modal and keep button red, don't add to chat
    showWrongAnswerModal(option.feedback);
    // After showing modal, wait for user to click try again
    return;
  }

  // Correct answer: show typing indicator and add to chat as before
  const typing = showTypingIndicator({ author: "You", from: "user" });
  await wait(YOU_TYPING_MS);
  typing.remove();

  pushMessage({ author: "You", text: option.youText, from: "user" });

  await wait(450);
  void goToNode(option.next);
}

function startScenario() {
  splashScreen.classList.add("hidden");
  chatScreen.classList.remove("hidden");

  pendingNodeToken += 1;
  chatLog.innerHTML = "";
  void goToNode(scenario.startNodeId);
}

beginBtn.addEventListener("click", startScenario);
restartBtn.addEventListener("click", startScenario);

// Modal event listeners
const wrongAnswerModal = document.getElementById("wrong-answer-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBackdrop = wrongAnswerModal.querySelector(".modal-backdrop");

function handleModalClose() {
  hideWrongAnswerModal();
  // Re-enable the buttons for retry
  const buttons = Array.from(choicesEl.querySelectorAll(".choice-btn"));
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
}

modalCloseBtn.addEventListener("click", handleModalClose);
modalBackdrop.addEventListener("click", handleModalClose);
