const checkbox = document.getElementById('checkbox')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const form = document.getElementById('form')
const feedback = document.getElementById('feedback')
const correctCount = document.getElementById('correctCount')

let questionIdx = 0
let answerIdx = 1
let inARow = 0
let currentIdx = 0
let current = null

const blink = (elt, value, delay = 200) => {
  elt.style.visibility = 'hidden'
  elt.textContent = value
  setTimeout(() => elt.style.visibility = 'visible', delay)
}

const newQuestion = list => {
  blink(correctCount, `(${inARow})`)
  answer.value = ''
  current = list[currentIdx]
  currentIdx = (currentIdx + 1) % list.length
  blink(question, current[questionIdx])
  answer.focus()
}

const submit = (list, e) => {
  e.preventDefault() // Block default form submission
  const input = answer.value
  const realAnswer = current[answerIdx]
  if (input.toLowerCase() === realAnswer.toLowerCase()) {
    inARow++
    blink(feedback, 'Correct!')
    document.body.style.backgroundColor = `hsl(${Math.floor((Math.random() * 360))} 100% 90%)`
  } else {
    inARow = 0
    blink(feedback, `Answer: ${realAnswer.toLowerCase()}`)
  }
  newQuestion(list)
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
  list.sort(() => (Math.random() * 2) - 1)
  onCheckbox()
  checkbox.addEventListener('change', onCheckbox)
  form.addEventListener('submit', submit.bind(null, list))
}

initialize(list)
