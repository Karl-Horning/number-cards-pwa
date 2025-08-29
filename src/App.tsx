import { useMemo } from "react";
import { useNumberTrick } from "./hooks/useNumberTrick";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import AnswerButtons from "./components/AnswerButtons";
import ResultPanel from "./components/ResultPanel";
import Footer from "./components/Footer";

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
    const { deck, step, totalSteps, answer, restart, result, max } =
        useNumberTrick(63);

    /** Numbers to display for the current card; empty once finished. */
    const numbers = useMemo(() => {
        if (step > totalSteps) return [];
        return deck[`card${step}`].slice();
    }, [deck, step, totalSteps]);

    return (
        <main className="min-h-screen bg-gray-900 text-white p-6">
            <div className="mx-auto max-w-3xl">
                <Header />

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

                            <CardGrid numbers={numbers} step={step} />

                            <AnswerButtons
                                onYes={() => answer(true)}
                                onNo={() => answer(false)}
                            />

                            <progress
                                className="mt-4 w-full"
                                value={step - 1}
                                max={totalSteps}
                                aria-hidden="true"
                            />
                        </>
                    ) : (
                        <ResultPanel result={result} onRestart={restart} />
                    )}
                </section>

                <Footer />
            </div>
        </main>
    );
}
