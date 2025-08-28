import { useMemo } from "react";
import { useNumberTrick } from "./hooks/useNumberTrick";

/**
 * App shell for the Number Cards game.
 *
 * Renders the game flow:
 * - Intro and instructions
 * - A sequence of cards (questions) asking if the secret number appears
 * - Final result and a "Play again" action
 *
 * Uses the `useNumberTrick` hook to manage game state and compute the result.
 *
 * @returns The full game UI with header, game section, and footer.
 */
export default function App() {
    // Game state and actions from the hook
    const { deck, step, totalSteps, answer, restart, result, max } =
        useNumberTrick(63);

    /**
     * The numbers to display on the current card.
     * Empty array once the questionnaire is finished.
     */
    const numbers = useMemo(() => {
        if (step > totalSteps) return [];
        const list = deck[`card${step}`].slice();
        return list;
    }, [deck, step, totalSteps]);

    return (
        <main className="min-h-screen bg-gray-900 text-white p-6">
            <div className="mx-auto max-w-3xl">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Number Cards</h1>
                    <InstallHint />
                </header>

                <section className="bg-gray-800 rounded-2xl p-5 shadow-lg">
                    <p className="text-gray-300">
                        Pick a number from 1 to {max}. Keep it secret.
                    </p>

                    {result === null ? (
                        <>
                            <h2 className="mt-4 text-xl font-semibold">
                                Step {step} of {totalSteps}
                            </h2>
                            <p className="mt-1">Is your number on this card?</p>

                            {/* Card grid: purely presentational list of numbers */}
                            <div
                                role="group"
                                aria-label={`Card ${step}`}
                                className="mt-4 grid grid-cols-8 gap-2 text-center"
                            >
                                {numbers.map((n) => (
                                    <span
                                        key={n}
                                        className="bg-gray-700 rounded-lg py-1"
                                    >
                                        {n}
                                    </span>
                                ))}
                            </div>

                            {/* Answer controls */}
                            <div className="mt-5 flex gap-3">
                                <button
                                    onClick={() => answer(true)}
                                    className="rounded-2xl px-4 py-2 bg-emerald-600 hover:bg-emerald-500 cursor-pointer"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => answer(false)}
                                    className="rounded-2xl px-4 py-2 bg-rose-600 hover:bg-rose-500 cursor-pointer"
                                >
                                    No
                                </button>
                            </div>

                            {/* Simple progress indicator for steps completed */}
                            <progress
                                className="mt-4 w-full"
                                value={step - 1}
                                max={totalSteps}
                                aria-label="Progress"
                            />
                        </>
                    ) : (
                        <>
                            {/* Live region so screen readers announce the result */}
                            <h2
                                className="mt-4 text-3xl font-bold"
                                aria-live="polite"
                            >
                                Your number is: {result}
                            </h2>

                            <div className="mt-5">
                                <button
                                    onClick={restart}
                                    className="rounded-2xl px-4 py-2 bg-indigo-600 hover:bg-indigo-500 cursor-pointer"
                                >
                                    Play again
                                </button>
                            </div>

                            <div className="mt-5">
                                <HowItWorks />
                            </div>
                        </>
                    )}
                </section>

                <footer className="mt-8 text-sm text-gray-400">
                    Works offline once installed • Built with React, TypeScript
                    & Tailwind
                </footer>
            </div>
        </main>
    );
}

/**
 * Disclosure widget with a short, plain-English explanation
 * of how the number trick works.
 *
 * @returns A collapsible details/summary block.
 */
function HowItWorks() {
    return (
        <details className="ml-0">
            <summary className="cursor-pointer select-none underline">
                How it works
            </summary>
            <p className="mt-2 text-gray-300">
                Every card has a value (1, 2, 4, 8, 16, 32). Your 'Yes' answers
                add these up to make your number.
            </p>
            <p className="mt-2 text-gray-300">
                Example: 'Yes' to 1, 4 and 8 (the first, third, and fourth cards) → 1 + 4 + 8 = 13.”
            </p>
        </details>
    );
}

/**
 * Lightweight install hint. Actual PWA install prompts depend on the browser
 * and platform, so we just nudge the user towards the browser's menu.
 *
 * @returns A small, low-emphasis text hint.
 */
function InstallHint() {
    // Simple text hint; platform-specific install prompts will vary by browser.
    return (
        <span className="text-xs text-gray-400">
            Install from your browser menu
        </span>
    );
}
