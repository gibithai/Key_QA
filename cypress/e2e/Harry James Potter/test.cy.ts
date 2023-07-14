const questions = [
  {
    id: 0,
    text: 'Если бы ты нашел монету на улице, что бы ты с ней сделал?',
    answers: [
      {
        id: 0,
        text: 'Поднял бы и отдал бы обратно, если бы нашел владельца.',
        points: [1, 0, 2, 1]
      },
      {
        id: 1,
        text: 'Поднял бы и оставил бы себе.',
        points: [0, 2, 0, 1]
      },
      {
        id: 2,
        text: 'Поднял бы и отдал бы обратно, если бы нашел владельца.',
        points: [1, 1, 0, 2]
      }
    ]
  },
  {
    id: 1,
    text: 'Если бы ты нашел заблудившегося щенка, что бы ты сделал?',
    answers: [
      {
        id: 3,
        text: 'Приютил бы его и заботился о нем.',
        points: [0, 0, 2, 0]
      },
      {
        id: 4,
        text: 'Поищу его хозяина или отнесу в приют.',
        points: [2, 0, 1, 1]
      },
      {
        id: 5,
        text: 'Просто прошел бы мимо.',
        points: [0, 2, 0, 0]
      }
    ]
  },
  {
    id: 2,
    text: 'Если бы перед тобой стояла задача - спасти мир или спасти свою семью, что бы ты выбрал?',
    answers: [
      {
        id: 6,
        text: 'Спасти мир, ведь это больше всего людей.',
        points: [1, 0, 1, 2]
      },
      {
        id: 7,
        text: 'Спасти свою семью, потому что они для меня важнее всего.',
        points: [2, 1, 2, 0]
      },
      {
        id: 8,
        text: 'Попытался бы найти способ спасти и то, и другое.',
        points: [2, 1, 1, 2]
      }
    ]
  },
  {
    id: 3,
    text: 'В чем для тебя суть магии?',
    answers: [
      {
        id: 9,
        text: 'Магия — это сила, которую можно использовать для достижения своих целей.',
        points: [2, 1, 0, 1]
      },
      {
        id: 10,
        text: 'Магия — это возможность помогать другим и делать мир лучше.',
        points: [1, 0, 2, 1]
      },
      {
        id: 11,
        text: 'Магия — это инструмент для постижения неизведанных тайн мира.',
        points: [1, 1, 0, 2]
      }
    ]
  },
  {
    id: 4,
    text: 'Какой предмет ты с нетерпением ждешь изучать в Хогвартсе?',
    answers: [
      {
        id: 12,
        text: 'Зельеварение, мне нравится точность и аккуратность этого процесса.',
        points: [0, 2, 0, 2]
      },
      {
        id: 13,
        text: 'Оборона от темных искусств, мне важно уметь защищаться.',
        points: [2, 1, 1, 0]
      },
      {
        id: 14,
        text: 'Изучение магических существ, я всегда был увлечен природой и животными.',
        points: [0, 0, 2, 1]
      }
    ]
  },
  {
    id: 5,
    text: 'Если бы ты столкнулся с драконом, что бы ты сделал?',
    answers: [
      {
        id: 15,
        text: 'Использовал бы заклинание для умиротворения дракона.',
        points: [1, 0, 1, 2]
      },
      {
        id: 16,
        text: 'Попытался бы убежать и спрятаться.',
        points: [0, 2, 1, 0]
      },
      {
        id: 17,
        text: 'Использовал бы свои навыки в диалоге, чтобы убедить дракона не атаковать.',
        points: [2, 0, 2, 1]
      }
    ]
  },

  {
    id: 6,
    text: 'Какой ты видишь свою роль в команде?',
    answers: [
      {
        id: 18,
        text: 'Я предпочитаю быть лидером и принимать решения.',
        points: [2, 1, 0, 1]
      },
      {
        id: 19,
        text: 'Я лучше работаю в роли поддержки, помогая другим.',
        points: [0, 0, 2, 1]
      },
      {
        id: 20,
        text: 'Я предпочитаю работать самостоятельно.',
        points: [1, 2, 0, 2]
      }
    ]
  },
  {
    id: 7,
    text: 'Что ты больше всего ценишь в друзьях?',
    answers: [
      {
        id: 21,
        text: 'Верность и готовность помочь в любую минуту.',
        points: [2, 0, 2, 0]
      },
      {
        id: 22,
        text: 'Интеллект и чувство юмора.',
        points: [0, 1, 0, 2]
      },
      {
        id: 23,
        text: 'Амбициозность и решительность.',
        points: [1, 2, 0, 1]
      }
    ]
  },
  {
    id: 8,
    text: 'Какое заклинание ты бы изучил первым?',
    answers: [
      {
        id: 24,
        text: 'Экспелиармус, чтобы отразить атаки противника.',
        points: [2, 1, 1, 0]
      },
      {
        id: 25,
        text: 'Вингардиум Левиоса, чтобы мог поднимать предметы.',
        points: [0, 0, 2, 1]
      },
      {
        id: 26,
        text: 'Авада Кедавра, чтобы иметь мощное оружие в руках.',
        points: [1, 2, 0, 1]
      }
    ]
  },
  {
    id: 9,
    text: 'Какой тип палочки бы ты выбрал?',
    answers: [
      {
        id: 27,
        text: 'Сердцевина из волоса единорога, потому что они привносят удачу.',
        points: [0, 0, 2, 1]
      },
      {
        id: 28,
        text: 'Сердцевина из пера феникса, потому что она сильна и мощна.',
        points: [2, 1, 0, 0]
      },
      {
        id: 29,
        text: 'Сердцевина из струны дракона, потому что она сильна и непредсказуема.',
        points: [1, 2, 0, 2]
      }
    ]
  }
]
Cypress.Commands.add('determineFaculty', (answers) => {
  const questionAnswers = [
    { id: 0, points: [0, 0, 0, 0] },
    { id: 1, points: [1, 0, 0, 0] },
    { id: 2, points: [0, 1, 0, 0] },
    { id: 3, points: [0, 0, 1, 0] },
    { id: 4, points: [0, 0, 0, 1] }
    // Add other questions and answers as needed
  ]
  const result = answers.reduce(
    (pv, cv) => {
      const answer = questionAnswers.find((qa) => qa.id === cv)

      return answer != null
        ? [
            pv[0] + answer.points[0],
            pv[1] + answer.points[1],
            pv[2] + answer.points[2],
            pv[3] + answer.points[3]
          ]
        : pv
    },
    [0, 0, 0, 0]
  )

  const selectedFacultyIndex = result.reduce(
    (pv, cv, index, array) => (cv > array[pv] ? index : pv),
    0
  )

  return selectedFacultyIndex
})

// Write a Cypress test to simulate the process for 10,000 students
describe('Faculty Determination', () => {
  it('Determines faculty for 10,000 students', () => {
    const studentCount = 10000
    const faculties = ['Гриффиндор', 'Слизерин', 'Пуффендуй', 'Когтевран']
    const facultyCounts = [0, 0, 0, 0]

    // Loop through each student
    for (let i = 0; i < studentCount; i++) {
      const studentAnswers = []

      // Generate 5 random answers for each student
      for (let j = 0; j < 5; j++) {
        const randomFacultyIndex = Cypress._.random(faculties.length - 1)
        studentAnswers.push(randomFacultyIndex)
      }
      // Generate 5 random answers for each student
      for (let j = 0; j < 5; j++) {
        const randomQuestionIndex = Cypress._.random(questions.length - 1)
        const randomAnswerIndex = Cypress._.random(
          questions[randomQuestionIndex].answers.length - 1
        )
        const randomAnswerId =
          questions[randomQuestionIndex].answers[randomAnswerIndex].id
        studentAnswers.push(randomAnswerId)
      }
      // Determine the faculty for the current student using the custom command
      cy.determineFaculty(studentAnswers).then((selectedFacultyIndex) => {
        facultyCounts[selectedFacultyIndex] += 1
      })
    }

    // Assert the results
    cy.wrap(facultyCounts).each((count, index) => {
      const facultyName = faculties[index]
      cy.log(`${facultyName}: ${count}`)
    })
  })
})
