import { useMemo, useState } from "react";

/**
 * Small React hook for a number-guessing game.
 *
 * You (the player) pick a secret number between 1 and `max`.
 * The hook builds a set of "cards", each showing a list of numbers.
 * For each card you answer "Yes" or "No" to: "Is your number on this card?".
 * After the last card, the hook adds up hidden values for every card you said
 * "Yes" to and returns your original number as `result`.
 *
 * You don't need to know the maths behind it to use this hook.
 *
 * @param max - The highest possible secret number (inclusive). Default: 63.
 * @returns An object with the deck (cards), the current step, total steps,
 * `answer(yes)`, `restart()`, the final `result` (or `null` until finished),
 * and the `max` used.
 *
 * @example
 * const { deck, step, totalSteps, answer, restart, result } = useNumberTrick(63);
 * // Show deck[`card${step}`], ask the question, call answer(true|false).
 * // When step > totalSteps, `result` holds the guessed number.
 *
 * @remarks
 * Each card secretly has a value (1, 2, 4, 8, and so on). Saying "Yes" to a card
 * adds that card's value to the total. Those values are chosen so that the
 * total uniquely identifies the secret number. In this implementation we
 * read a card's value as the *smallest* number on that card.
 */
export function useNumberTrick(max = 63) {
    // Build the deck whenever `max` changes.
    // Each card corresponds to a hidden value (1, 2, 4, 8, and so on).
    // A number appears on a card if that card's value contributes to making it.
    const deck = useMemo(() => {
        const d: Record<string, number[]> = {};
        let idx = 1;
        // Walk the hidden values: 1, 2, 4, 8, and so on up to `max`
        for (let w = 1; w <= max; w <<= 1, idx++) {
            const name = `card${idx}`;
            d[name] = [];
            // Put every number that uses this value onto the card
            for (let n = 1; n <= max; n++) if (n & w) d[name].push(n);
        }
        return d;
    }, [max]);

    // Number of questions equals number of cards (enough to cover 1 to max)
    const totalSteps = useMemo(() => Object.keys(deck).length, [deck]);

    // 1-based index of the current card/question
    const [step, setStep] = useState(1);

    // Store answers per step: { 1: true|false, 2: true|false, ... }
    const [answers, setAnswers] = useState<Record<number, boolean>>({});

    /**
     * Record the player's answer for the current step and move on.
     *
     * @param yes - Whether the secret number appears on the current card.
     */
    function answer(yes: boolean) {
        setAnswers((a) => ({ ...a, [step]: yes }));
        setStep((s) => s + 1);
    }

    /**
     * Reset the game back to step 1 (clears all answers).
     */
    function restart() {
        setStep(1);
        setAnswers({});
    }

    // Work out the final number once all questions are answered.
    // We treat the smallest number on a card as that card's hidden value.
    const result = useMemo(() => {
        if (step <= totalSteps) return null; // Not finished yet

        let total = 0;
        for (const [k, saidYes] of Object.entries(answers)) {
            if (!saidYes) continue; // "No" adds nothing
            const weight = Math.min(...deck[`card${k}`]); // the card's value
            total += weight;
        }
        return total;
    }, [answers, deck, step, totalSteps]);

    return { deck, step, totalSteps, answer, restart, result, max };
}
