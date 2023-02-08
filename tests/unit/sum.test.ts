import { it, expect } from 'vitest';
import { sum } from '../../src/utils/sum';

it('adds two numbers', () => {
	expect(sum(2, 2)).toBe(4);
	expect(sum(2, 2)).not.toBe(2);
});
