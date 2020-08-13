const refreshButton = document.getElementById('refresh')
const clearButton = document.getElementById('clear')
const submitButton = document.getElementById('submit')
const question = document.querySelector('p')
const questionNumber = document.querySelector('h3')
const optionA = document.getElementById('a')
const optionB = document.getElementById('b')
const optionC = document.getElementById('c')
const optionD = document.getElementById('d')
const optionE = document.getElementById('e')
const answerA = document.querySelectorAll('label')[0]
const answerB = document.querySelectorAll('label')[1]
const answerC = document.querySelectorAll('label')[2]
const answerD = document.querySelectorAll('label')[3]
const answerE = document.querySelectorAll('label')[4]
let i = 0
let CorrectNumber = 0
let currentQuestionID = 'x'
let refreshed = false
let submitted = false
let submitTime = 0
let refreshTime = 0
const result = document.querySelectorAll('h3')[2]

function clear() {
	optionA.checked = false;
	optionB.checked = false;
	optionC.checked = false;
	optionD.checked = false;
	optionE.checked = false;
}

function refresh() {
	refreshTime++
	if (refreshTime > questionBank.length) {
		alert('The bank is done. Thank you for your participation. 所有題目已答，多謝你的參與。')
		alert('Your score is '+ CorrectNumber/i*100 +'%.  你的分數是' + CorrectNumber/i*100 +'%。')
		} else {	
		do { 
			currentQuestionID = Math.floor(Math.random()*(questionBank.length));
		} while (questionBank[currentQuestionID].answered === true);
		question.textContent = questionBank[currentQuestionID].Question
		i++
		questionNumber.textContent = 'Q.' + String(i)
		answerA.textContent = questionBank[currentQuestionID].Choices[0]
		answerB.textContent = questionBank[currentQuestionID].Choices[1]
		answerC.textContent = questionBank[currentQuestionID].Choices[2]
		answerD.textContent = questionBank[currentQuestionID].Choices[3]
		answerE.textContent = questionBank[currentQuestionID].Choices[4]
		refreshed = true
		submitted = false
		questionBank[currentQuestionID].answered = true
		clear()}

}

function submit() {
	submitTime++
	if (refreshed === false) {
		alert('please refresh a question first. 請按下一題。');
	} else {
		let answer = 'None';
		let CorrectAnswer = questionBank[currentQuestionID].CorrectChoice;
		if (optionA.checked) {
			answer = 1;
		} else if (optionB.checked) {
			answer = 2;
		} else if (optionC.checked) {
			answer = 3;
		} else if (optionD.checked) {
			answer = 4;
		} else if (optionE.checked) {
			answer = 5;
		}
		if (answer === CorrectAnswer && submitted === false) {
				alert('You are correct! 回答正確。');
				CorrectNumber++;
			} else if (submitted === true) {
				alert('You answered already. 已經作答。')
			} else {
			alert('You are wrong. 回答錯誤。');
			alert('The correct answer is ' + questionBank[currentQuestionID].Choices[CorrectAnswer-1] + '. 回答錯誤。正確答案是'+ questionBank[currentQuestionID].Choices[CorrectAnswer-1] + '。');
		}
		result.textContent = '分數:   ' + CorrectNumber + ' / '  + i + "  (  "+ CorrectNumber/i*100 +'%  )'
		submitted = true
		if (submitTime === questionBank.length || refreshTime > questionBank.length) {
			alert('Thank you for your participation. 多謝你的參與。')
			alert('Your score is '+ CorrectNumber/i*100 +'%.  你的分數是' + CorrectNumber/i*100 +'%。')
		}
		clear()
	}

}

refreshButton.addEventListener('click', refresh)

clearButton.addEventListener('click', clear)

submitButton.addEventListener('click', submit)

optionA.addEventListener('click', function() {
	clear()
	optionA.checked = true
})

optionB.addEventListener('click', function() {
	clear()
	optionB.checked = true
})

optionC.addEventListener('click', function() {
	clear()
	optionC.checked = true
})

optionD.addEventListener('click', function() {
	clear()
	optionD.checked = true
})

optionE.addEventListener('click', function() {
	clear()
	optionE.checked = true
})

const questionBank = [
{	
	QuestionID:0,
	Question:'以下哪一隻是股票？',
	Choices:['阿里巴巴','萬寧','六月','百佳','彼得'],
	CorrectChoice:1,
	answered: false
},
{
	QuestionID:1,
	Question:'日本政府高官公布皇太子德仁5月繼任後使用的年號為？',
	Choices:['「令和」','「昭和」','「大正」','「平成」','「明治」'],
	CorrectChoice:1,
	answered: false
},
{
	QuestionID:2,
	Question:'5 + 10 x 7 = ?',
	Choices:['70','71','72','73','75'],
	CorrectChoice:5,
	answered: false
},
{
	QuestionID:3,
	Question:'在2020年，香港法定最低工資水平是？',
	Choices:['每小時$34.5','每小時$35.5','每小時$36.5','每小時$37.5','每小時$38.5'],
	CorrectChoice:4,
	answered: false
},
{
	QuestionID:4,
	Question:'“但願人長久，千里共嬋娟”，其中嬋娟指的是什麼？',
	Choices:['妻子','月亮','僕人','衣服','母親'],
	CorrectChoice:2,
	answered: false
},
{
	QuestionID:5,
	Question:'《百家姓》中沒有下面哪個姓？',
	Choices:['烏','巫','肖','蕭','廖'],
	CorrectChoice:3,
	answered: false
},
{
	QuestionID:6,
	Question:'世界上最大的海洋是？',
	Choices:['大西洋','北冰洋','太平洋','印度洋','南大洋'],
	CorrectChoice:3,
	answered: false
},
{
	QuestionID:7,
	Question:'羅馬數字 IX 對應的阿拉伯數字是多少？',
	Choices:['4','6','9','10','11'],
	CorrectChoice:3,
	answered: false
},
{
	QuestionID:8,
	Question:'一個成年人有多少根骨頭？',
	Choices:['10','120','200','206','1420'],
	CorrectChoice:4,
	answered: false
},
]