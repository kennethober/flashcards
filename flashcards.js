const pickOne = list => list[Math.floor(Math.random() * list.length)]

const languageSwitch = () => {}

const checkbox = document.getElementById('checkbox')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const form = document.getElementById('form')
const feedback = document.getElementById('feedback')
const colors = ['AliceBlue', 'Azure', 'Cornsilk', 'Gainsboro', 'HoneyDew', 'Lavender', 'LavenderBlush', 'LightCyan', 'LightGoldenRodYellow', 'LightGreen', 'LightPink', 'LightYellow', 'Linen', 'MintCream', 'MistyRose', 'OldLace', 'PaleGreen', 'PaleTurquoise', 'Pink', 'Plum', 'PowderBlue', 'Thistle']


let questionIdx = 0
let answerIdx = 1

let current = null

const blink = (elt, value, delay = 200) => {
  elt.style.visibility = 'hidden'
  elt.textContent = value
  setTimeout(() => elt.style.visibility = 'visible', delay)
}

const newQuestion = list => {
  answer.value = ''
  current = pickOne(list)
  blink(question, current[questionIdx])
  answer.focus()
}

const submit = (list, e) => {
  e.preventDefault() // Block default form submission
  
  const input = answer.value
  
  if (input === current[answerIdx]) {
    document.body.style.backgroundColor = pickOne(colors)
    feedback.textContent = 'Correct!'
    newQuestion(list)
  } else {
    blink(feedback, 'Try again')
    answer.focus()
  }
}

const onCheckbox = e => {
  if (checkbox.checked) {
    questionIdx = 1
    answerIdx = 0
  } else {
    questionIdx = 0
    answerIdx = 1
  }
  newQuestion(list)
}

const initialize = list => {
  onCheckbox()
  checkbox.addEventListener('change', onCheckbox)
  form.addEventListener('submit', submit.bind(null, list))
}

initialize(list)
