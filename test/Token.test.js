const BN = web3.utils.BN;
//const BigNumber = require('bignumber.js').BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bn')(BN))
  .should();


const Token = artifacts.require('TokenSPC');

contract('TokenSPC', accounts => {
  const _name = 'Seed Project Coin';
  const _symbol = 'SPC';
  const _decimals = new BN(18);

  beforeEach(async function () {
    this.token = await Token.new(_name, _symbol, _decimals);
  });

  describe('token attributes', function() {
    it('has the correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('has the correct decimals', async function() {
      const decimals = await this.token.decimals();
      decimals.should.be.a.bignumber.that.equals(_decimals);
    });
  });
});
