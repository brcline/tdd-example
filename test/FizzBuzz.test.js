/* global describe it */
const { expect } = require('chai')
const chai = require('chai')

const FizzBuzz = require('.././FizzBuzz')

/*
 * Mocha has a lot of callbacks and hooks that are available like describe and it.
 * Callbacks run in the order they are found in the file.
 */
describe('Testing Fizzbuz - one number at a time', () => {
  it('should return a 1 when 1 is passed in', done => {
    // expect comes from chai.
    expect(FizzBuzz(1)).to.equal(1)
    done()
  })

  it('should return a 2 when 2 is passed in', done => {
    expect(FizzBuzz(2)).to.equal(2)
    done()
  })

  it('should return fizz when 3 is passed in', done => {
    expect(FizzBuzz(3)).to.equal('fizz')
    done()
  })

  it('should return fizz when 6 is passed in', done => {
    expect(FizzBuzz(6)).to.equal('fizz')
    done()
  })

  it('should return buzz when 5 is passed in', done => {
    expect(FizzBuzz(5)).to.equal('buzz')
    done()
  })

  it('should return buzz when 10 is passed in', done => {
    expect(FizzBuzz(10)).to.equal('buzz')
    done()
  })

  it('should return fizzbuzz when 15 is passed in', done => {
    expect(FizzBuzz(15)).to.equal('fizzbuzz')
    done()
  })

  it('should return fizzbuzz when 30 is passed in', done => {
    expect(FizzBuzz(30)).to.equal('fizzbuzz')
    done()
  })
})
