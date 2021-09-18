import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
*/
export default {
    stack: [],
    getLength() {
        return this.stack.length;
    },
    addLink(value = '') {
        this.stack.push('( ' + value + ' )')
        return this;
    },
    removeLink(position) {
        if (
            typeof (position) !== 'number'
            || position % Math.floor(position) !== 0
            || position <= 0
            || position >= this.stack.length
        ) {
            this.stack = [];
            throw new Error("You can't remove incorrect link!");
        } else {
            this.stack = [...this.stack.slice(0, position - 1), ...this.stack.slice(position)];
            return this;
        }
    },
    reverseChain() {
        this.stack.reverse();
        return this;
    },
    finishChain() {
        let s = this.stack;
        this.stack = [];
        return s.join('~~')
    }
};
