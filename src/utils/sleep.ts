/**
 * @description Pauses the program execution for the specified number of seconds.
 * @param {number} time - The duration, in seconds, for which the program should pause.
 * @returns {Promise<void>} A promise that resolves after the specified duration.
 */
export default function sleep(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
}
