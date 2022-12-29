const Question = [

  {
    id:1,
    question: 'What was the first World Cup trophy called?',
    answer: [
      {
        text: 'Jules Rimet cup',
        correct: true
      },
      {
        text: 'Gillette Cup',
        correct: false
      },
      {
        text: 'Lombard World Challenge Cup',
        correct: false
      },
      {
        text: 'Prudential Cup',
        correct: false
      }
    ]
    
  },

  {
    id:2,
    question: 'Who is the all-time leading World Cup goalscorer?',
    answer: [
      {
        text: 'Pele',
        correct: false
      },

      {
        text: 'Johan Cruyff',
        correct: false,
      },

      {
        text: 'Miroslav Klose',
        correct: true
      },

      {
        text: 'Diego Maradona',
        correct: false
      }
    ]
  },

  {
    id: 3,
    question: 'Who scored for England in the 1966 final against West Germany?',
    answer: [
      {
        text: 'Scholl Mehmet & Martin Peters',
        correct: false
      },
      {
        text: 'Martin Peters & Geoff Hurst',
        correct: true
      },
      {
        text: 'Kohler Jürgen & Eilts Dieter',
        correct: false
      },
      {
          text: 'Möller Andreas & Eilts Dieter',
          correct: true
      }
    ]
  },

  {
    id: 4,
    question: 'Which African footballer is the oldest person ever to score in a World Cup?',
    answer: [
      {
        text: 'Yaya toure',
        correct: false
      },
      {
        text: 'didier drogba',
        correct: false
      },
      {
        text: 'seydou keita',
        correct: false
      },
      {
        text: 'Roger Milla',
        correct: true
      }
    ]
  },

  {
    id: 5,
    question: 'How many times have Italy won the World Cup so far?',
    answer: [
      {
        text: '3',
        correct: false
      },
      {
        text: '2',
        correct: false
      },
      {
        text: '4',
        correct: true
      },
      {
        text: '1',
        correct: false
      }
    ]
  },



  {
    id: 6,
    question: 'In what year was the World Cup first broadcast on TV?',
    answer: [
      {
        text: '1954',
        correct: true
      },
      {
        text: '1966',
        correct: false
      },
      {
        text: '1946',
        correct: false
      },
      {
        text: '1938',
        correct: false
      }
    ]
  },

  {
    id: 7,
    question: 'Who won the Best Young Player Award in 2018?',
    answer: [
      {
        text: 'Kylian Mbappe',
        correct: true
      },
      {
        text: 'Gabriel Jesus',
        correct: false
      },
      {
        text: 'Ousmane Dembélé',
        correct: false
      },
      {
        text: 'J Sancho',
        correct: false
      }
    ]
  },

  {
    id: 8,
    question: 'Which nation was the first Asian country to reach the World Cup semi-finals?',
    answer: [
      {
        text: 'Japan',
        correct: false
      },
      {
        text: 'South Korea',
        correct: true
      },
      {
        text: 'Iran',
        correct: false
      },
      {
        text: 'Saudi Arabia',
        correct: false
      }
    ]
  },

  {
    id: 9,
    question: 'Which player scored a record 13 goals in a single tournament?',
    answer: [
      {
        text: 'Cristiano Ronaldo',
        correct: false
      },
      {
        text: 'Lionel Messi',
        correct: false
      },
      {
        text: 'Just Fontaine',
        correct: true
      },
      {
        text: 'Franz Beckenbauer',
        correct: false
      }
    ]
  },

  {
    id: 10,
    question:'Which nation will have its World Cup debut in 2022?',
    answer: [
      {
        text: 'Japan',
        correct: false
      },
      {
        text: 'Morocco',
        correct: false
      },
      {
        text: 'Qatar',
        correct: 'true'
      },
      {
        text: 'Saudi Arabia',
        correct: false
      }
    ]
  },

  {
    id: 11,
    question:'What is the USA’s highest finishing position at a World Cup?',
    answer: [

      {
        text: '2nd (in 1934)',
        correct: false
      },
      {
        text: '4th (in 1946)',
        correct: false
      },
      {
        text: '3rd (in 1930)',
        correct: true
      },
      {
        text: '5th (in 1950)',
        correct: false
      }
    ]
  },

  {
    id: 12,
    question: 'Which 3 countries will host the 2026 tournament?',
    answer: [

      {
        text: 'USA, Canada & Mexico',
        correct: true
      },

      {
        text: 'USA, German & Mexico',
        correct: false
      },

      {
        text: 'Spain, Canada & Mexico',
        correct: false
      },

      {
        text: 'USA, Canada & Italy',
        correct: false
      }
    ]
  },

  {
    id: 13,
    question: 'How many World Cups did Pele win?',
    answer: [
      {
        text: '1',
        correct: false
      },
      {
        text: '4',
        correct: false
      },
      {
        text: '2',
        correct: false
      },
      {
        text: '3',
        correct: true
      }
    ]
  },

  {
    id: 14,
    question: 'What animal was the official mascot for the 1998 World Cup in France?',
    answer: [
      {
        text: 'A cockerel',
        correct: true
      },
      {
       text: 'octopus',
       correct: false 
      },
      {
        text: "La'eeb",
        correct: false
      },
      {
        text: 'dog',
        correct: false
      }
    ]
  },

  {
    id: 15,
    question: 'The 1966 final was played at which football stadium?',
    answer: [

      {
        text: 'Turin',
        correct: false
      },

      
      {
        text: 'Wembley',
        correct: true
      },

      
      {
        text: 'Amsterdam',
        correct: false
      },
      
      {
        text: 'Glasgow',
        correct: false
      },
    ]
  }
]

// Prize Pyramid
  // data for money pyramid
  const pyramidData = [

    { id: 1, amount: '$ 1,000'},
    { id: 2, amount: '$ 2,000'},
    { id: 3, amount: '$ 3,000'},
    { id: 4, amount: '$ 5,000'},
    { id: 5, amount: '$ 10,000'},
    { id: 6, amount: '$ 20,000'},
    { id: 7, amount: '$ 40,000'},
    { id: 8, amount: '$ 80,000'},
    { id: 9, amount: '$ 1,60,000'},
    { id: 10, amount:'$ 3,20,000'},
    { id: 11, amount:'$ 6,40,000'},
    { id: 12, amount:'$ 12,50,000'},
    { id: 13, amount:'$ 25,00,000'},
    { id: 14, amount:'$ 50,00,000'},
    { id: 15, amount:'$ 1,00,00,000'},


  ].reverse()


export {
  Question,
  pyramidData
};

