export default function createMultiplier(factor: number): (num: number) => number{
    return (num: number): number => {
        return num * factor;
    }
}

