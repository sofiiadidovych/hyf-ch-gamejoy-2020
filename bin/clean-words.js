'use strict'

const fs = require('fs')

const inputFilePath = './resources/google-10000-english.txt'

const words = []

const fileContents = fs.readFileSync(inputFilePath, 'utf-8')
const wordArray = fileContents.split('\n')

for (const word of wordArray) {

  const cleanedWord = word.trim().toLowerCase()

  if (cleanedWord.length >= 5) {
    words.push(cleanedWord)
  }
}

let finalWordsList = ''

for (const word of words) {
  finalWordsList += `${word}\n`
}

fs.writeFileSync('./resources/final-word-list.txt', finalWordsList, 'utf-8')
