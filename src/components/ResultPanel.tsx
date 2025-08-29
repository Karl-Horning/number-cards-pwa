import HowItWorks from "./HowItWorks";

/**
 * Final result view shown after all questions are answered.
 *
 * @param props.result - The computed secret number.
 * @param props.onRestart - Handler to restart the game.
 * @returns The result, a restart button, and the explanation.
 */
export default function ResultPanel({
    result,
    onRestart,
}: {
    result: number;
    onRestart: () => void;
}) {
    return (
        <>
            {/* Live region so screen readers announce the result */}
            <h2 className="mt-4 text-3xl font-bold" aria-live="polite">
                Your number is: {result}
            </h2>

            <div className="mt-5">
                <button
                    onClick={onRestart}
                    className="w-full cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 hover:bg-indigo-500"
                >
                    Play again
                </button>
            </div>

            <div className="mt-5">
                <HowItWorks />
            </div>
        </>
    );
}
