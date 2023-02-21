export interface GameObject {
	name: string;
	setup(): void;
	update(): void;
}
