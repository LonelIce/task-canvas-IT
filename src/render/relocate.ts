let relocate: boolean = true;
export const relocateToggle = (value: boolean): void => {
    relocate = value;
}
export const getRelocate = (): boolean => relocate;
