/**
 * Presentational grid of numbers for the current card.
 *
 * @param props.numbers - The list of numbers to display on this card.
 * @param props.step - Current step index (for accessibility labelling).
 * @returns A grid of numbers.
 */
export default function CardGrid({
    numbers,
    step,
}: {
    numbers: number[];
    step: number;
}) {
    return (
        <div
            role="group"
            aria-label={`Card ${step}`}
            className="mt-4 grid grid-cols-8 gap-2 text-center"
        >
            {numbers.map((n) => (
                <span key={n} className="bg-gray-700 rounded-lg py-1">
                    {n}
                </span>
            ))}
        </div>
    );
}
