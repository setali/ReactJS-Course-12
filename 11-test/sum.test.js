const { sum, sumString: mySumString } = require('./sum')

const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Run before all test')
})

beforeEach(() => {
  console.log('Run before each test')
})

afterEach(() => {
  console.log('Run after each test')
})

afterAll(() => {
  console.log('Run after all test')
})

describe('Sum', () => {
  test('sum test', () => {
    expect(sum(2, 5)).toBe(7)
    expect(sum(2, '6')).toBe(8)
    expect(sum(2, 'Ali')).toBeNaN()
    expect(sum()).toBe(0)
    expect(sum(1)).toBe(1)
    expect(sum(1, 2, 3)).toBe(3)
    expect(sum(NaN)).toBeNaN()
  })

  test('sumString test', () => {
    expect(sumString(2, 3)).toBe('Sum is 5')
    expect(sumString(2, 'Ali')).toBe('Sum is NaN')
    expect(sumString()).toBe('Sum is 0')
    expect(sumString(NaN)).toBe('Sum is NaN')
    expect(sumString(4, 5, 6)).toBe('Sum is 9')

    expect(sumString).toHaveBeenCalledTimes(5)
    expect(sumString).toHaveBeenCalledWith(2, 'Ali')
    expect(sumString).toHaveBeenCalledWith(NaN)
  })
})

// if (sum(2, 5) !== 7) {
//   throw new Error('Test failed')
// }

// if (sum(2, '5') !== 7) {
//   throw new Error('Test failed')
// }

// if (!Number.isNaN(sum(2, 'Ali'))) {
//   throw new Error('Test failed')
// }

// if (sum() !== 0) {
//   throw new Error('Test failed')
// }
