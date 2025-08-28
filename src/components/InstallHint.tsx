/**
 * Lightweight install hint. Actual PWA prompts vary by browser.
 *
 * @returns A small, low-emphasis text hint.
 */
export default function InstallHint() {
    return (
        <span className="text-xs text-gray-400">
            Install from your browser menu
        </span>
    );
}
