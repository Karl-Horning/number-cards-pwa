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
        <div className="mt-5 flex gap-3 flex-col md:flex-row">
            <button
                onClick={onYes}
                className="rounded-lg px-4 py-2 bg-emerald-700 hover:bg-emerald-500 cursor-pointer w-full"
            >
                Yes
            </button>
            <button
                onClick={onNo}
                className="rounded-lg px-4 py-2 bg-rose-600 hover:bg-rose-500 cursor-pointer w-full"
            >
                No
            </button>
        </div>
    );
}
