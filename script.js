/* TODO
 * let listName = null 
 * Add script to load list based on url param
 * Store separate list-order and progress for each list param
*/

const directionBtn = document.getElementById('direction')
const resetBtn = document.getElementById('reset')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const form = document.getElementById('form')
const feedback = document.getElementById('feedback')
const correctCount = document.getElementById('correctCount')

const wrongListProbability = 0.25
let wrongSet = new Set()

let listName = null
let list = []
let direction = 'e2k'
let questionIdx = 0
let answerIdx = 1
let inARow = 0
let currentIdx = -1 // current place in the list
let current = null
let actualIdx = null // index of current question (could be diff. from current place in list if repeating a previously wrong one)

const blink = (elt, value, delay = 200) => {
  elt.style.visibility = 'hidden'
  elt.textContent = value
  setTimeout(() => elt.style.visibility = 'visible', delay)
}

const chooseRandom = list => list[Math.floor((Math.random() * list.length))]

const newQuestion = lastWasWrong => {
  chooseNext(lastWasWrong)
  updateDisplay()
}

const chooseNext = lastWasWrong => {
  // With some probability, choose from the list of previously wrong-answered ones instead
  // (and don't do if the last one was wrong, to lower risk of showing the same one twice)
  if (!lastWasWrong && wrongSet.size > 0 && Math.random() < wrongListProbability) {
    actualIdx = chooseRandom([...wrongSet])
  } else {
    currentIdx = (currentIdx + 1) % list.length
    actualIdx = currentIdx
  }
  current = list[actualIdx]
  store(currentIdx, actualIdx, wrongSet, inARow, current)
}

const updateDisplay = () => {
  blink(correctCount, `(${inARow})`)
  //answer.value = ''
  form.reset()
  blink(question, current[questionIdx])
  answer.focus()
}

const submit = e => {
  e.preventDefault() // Block default form submission
  const input = answer.value
  const realAnswer = current[answerIdx]
  let lastWasWrong = false
  if (input.toLowerCase() === realAnswer.toLowerCase()) {
    console.log(`wrongSet (${JSON.stringify([...wrongSet])}) has actualIdx (${actualIdx}): ${wrongSet.has(actualIdx)}`) // DELETEME
    wrongSet.delete(actualIdx)
    inARow++
    blink(feedback, 'Correct!')
    document.body.style.backgroundColor = `hsl(${Math.floor((Math.random() * 360))} 100% 90%)`
  } else {
    lastWasWrong = true
    wrongSet.add(actualIdx)
    inARow = 0
    blink(feedback, `Answer: ${realAnswer.toLowerCase()}`)
  }
  newQuestion(lastWasWrong)
}

const reset = () => {
  list = [...listFromFile] // Shallow copy ok, as we're not modifying the elements
  list.sort(() => (Math.random() * 2) - 1)
  storeList(list)
  currentIdx = -1
  actualIdx = null
  wrongSet = new Set()
  // inARow = 0 // Don't clear out current score
  newQuestion()
}

const onDirectionBtn = e => {
  if (direction === 'e2k') {
    direction = 'k2e'
    directionBtn.textContent = 'E → K'
    questionIdx = 1
    answerIdx = 0
  } else {
    direction = 'e2k'
    directionBtn.textContent = 'K → E'
    questionIdx = 0
    answerIdx = 1
  }
  updateDisplay()
}

const haveStorage = () => localStorage.length

const getList = () => JSON.parse(localStorage.list)
const storeList = list => localStorage.list = JSON.stringify(list)

const getIdx = () => Number(localStorage.idx)
const storeIdx = idx => localStorage.idx = idx

const getActualIdx = () => Number(localStorage.actualIdx)
const storeActualIdx = idx => localStorage.actualIdx = idx

const getWrongSet = () => new Set(JSON.parse(localStorage.wrongSet))
const storeWrongSet = wrongSet => localStorage.wrongSet = JSON.stringify([...wrongSet])

const getInARow = () => Number(localStorage.inARow)
const storeInARow = num => localStorage.inARow = num

const getCurrent = () => JSON.parse(localStorage.current)
const storeCurrent = arr => localStorage.current = JSON.stringify(arr)

const store = (idx, actualIdx, wrongSet, inARow, current) => {
  storeIdx(idx)
  storeActualIdx(actualIdx)
  storeWrongSet(wrongSet)
  storeInARow(inARow)
  storeCurrent(current)
}

const initialize = () => {
  if (haveStorage()) {
    list = getList()
    currentIdx = getIdx()
    actualIdx = getActualIdx()
    wrongSet = getWrongSet()
    inARow = getInARow()
    current = getCurrent()
    updateDisplay()
  } else {
    reset()
  }
  directionBtn.addEventListener('click', onDirectionBtn)
  resetBtn.addEventListener('click', reset)
  form.addEventListener('submit', submit)
}

initialize()
