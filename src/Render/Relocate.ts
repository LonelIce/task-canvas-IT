let relocate: boolean = true;
export const RelocateToggle = (value: boolean): void => {
    relocate = value;
}
export const GetRelocate = (): boolean => {
    return relocate;
}