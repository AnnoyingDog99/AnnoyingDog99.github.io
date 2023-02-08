import { Vector3 } from 'three';
import { it, expect } from 'vitest';
import { Node } from '../../src/classes/Node';

it('tests Node getter functions', () => {
	const node = new Node(new Vector3(0, 0, 0), 3, 3);
	//position
	expect(node.position.toArray()).toStrictEqual([0, 0, 0]);
	expect(node.position.toArray()).not.toStrictEqual([1, 0, 0]);
	expect(node.position.toArray()).not.toStrictEqual([0, 1, 0]);
	expect(node.position.toArray()).not.toStrictEqual([0, 0, 1]);
	//kClosest
	expect(node.kClosest).toBe(3);
	expect(node.kClosest).not.toBe(4);
	expect(node.kClosest).not.toBe(2);

	//radius
	expect(node.radius).toBe(3);
	expect(node.radius).not.toBe(4);
	expect(node.radius).not.toBe(2);
});

it('tests Node setter functions', () => {
	const node = new Node(new Vector3(0, 0, 0), 3, 3);
	node.position = new Vector3(1, 1, 1);
	node.kClosest = 2;
	node.radius = 2;

	expect(node.position.toArray()).toStrictEqual([1, 1, 1]);
	expect(node.position.toArray()).not.toStrictEqual([0, 0, 0]);

	expect(node.kClosest).toBe(2);
	expect(node.kClosest).not.toBe(3);
	expect(node.kClosest).not.toBe(1);

	expect(node.radius).toBe(2);
	expect(node.radius).not.toBe(3);
	expect(node.radius).not.toBe(1);
});
