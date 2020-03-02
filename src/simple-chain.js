const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = [];
      throw 'bad value';
    }
    if (position > this.chain.length || position <= 0) {
      this.chain = []
      throw 'bad value';
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    let rock = this.chain.join('~~');
    this.chain = []
    return rock
  }
};

module.exports = chainMaker;
