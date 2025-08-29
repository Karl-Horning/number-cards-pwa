/**
 * Yes/No controls for the current card.
 *
 * @param props.onYes - Handler for a "Yes" answer.
 * @param props.onNo - Handler for a "No" answer.
 * @returns Two buttons.
 */
export default function AnswerButtons({
    onYes,
    onNo,
}: {
    onYes: () => void;
    onNo: () => void;
}) {
    return (
        <div className="mt-5 flex flex-col gap-3 md:flex-row">
            <button
                onClick={onYes}
                className="w-full cursor-pointer rounded-lg bg-emerald-700 px-4 py-2 hover:bg-emerald-500"
            >
                Yes
            </button>
            <button
                onClick={onNo}
                className="w-full cursor-pointer rounded-lg bg-rose-600 px-4 py-2 hover:bg-rose-500"
            >
                No
            </button>
        </div>
    );
}
