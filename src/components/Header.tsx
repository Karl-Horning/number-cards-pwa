import InstallHint from "./InstallHint";

/**
 * App header with title and install hint.
 *
 * @returns The app's header bar.
 */
export default function Header() {
    return (
        <header className="flex items-center justify-between mb-6 flex-col md:flex-row">
            <h1 className="text-2xl font-bold">Number Cards</h1>
            <InstallHint />
        </header>
    );
}
