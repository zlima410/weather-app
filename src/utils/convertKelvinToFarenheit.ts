/** @format */

export function convertKelvinToFarenheit(tempInKelvin: number): number {
    const tempInFarenheit = (tempInKelvin - 273.15) * 1.8 + 32;
    return Math.floor(tempInFarenheit);
}