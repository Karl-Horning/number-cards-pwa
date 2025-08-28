/**
 * Plain-English explanation of the trick.
 *
 * @returns A collapsible details/summary block.
 */
export default function HowItWorks() {
    return (
        <details className="ml-0">
            <summary className="cursor-pointer select-none underline">
                How it works
            </summary>
            <p className="mt-2 text-gray-300">
                Every card has a value (1, 2, 4, 8, 16, 32). Your "Yes" answers
                add these values together to make your number.
            </p>
            <p className="mt-2 text-gray-300">
                Example: "Yes" to 1, 4 and 8 (the first, third and fourth cards)
                → 1 + 4 + 8 = 13.
            </p>
        </details>
    );
}
