import { it, expect } from 'vitest';
import { sum } from '../../src/utils/sum';

it('adds two numbers', () => {
	expect(sum(2, 2)).toBe(4);
	expect(sum(2, 2)).not.toBe(2);
	expect(sum(2, 2)).not.toBe(3);
	expect(sum(3, 3)).toBe(6);
	expect(sum(3, 3)).not.toBe(9);
	expect(sum(3, 3)).not.toBe(0);
	expect(sum(1, 1)).not.toBe(0);

});
