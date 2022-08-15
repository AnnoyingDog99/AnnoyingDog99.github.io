import { visible } from '$stores/sideBarStore';

export function toggleVisible() {
    visible.update((value: boolean) => !value);
}