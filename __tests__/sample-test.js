/* eslint-env jest */

const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Greeter', function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory('Greeter')
    const greeter = await Greeter.deploy('Hello, mom!')
    await greeter.deployed()

    expect(await greeter.greet()).to.equal('Hello, mom!')

    const setGreetingTx = await greeter.setGreeting('Hola, mom!')

    // wait until the transaction is mined
    await setGreetingTx.wait()

    expect(await greeter.greet()).to.equal('Hola, mom!')
  })
})
