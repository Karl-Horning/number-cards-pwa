/**
 * App footer with brief tech note.
 *
 * @returns A low-emphasis footer.
 */
export default function Footer() {
    return (
        <footer className="mt-12 border-t-2 border-gray-700">
            <p className="mt-6 text-center">
                Made with ❤️ by{" "}
                <a
                    href="https://github.com/Karl-Horning"
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-blue-700 underline hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:text-blue-400"
                >
                    Karl Horning
                </a>
            </p>

            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                Works offline once installed • Built with React, TypeScript &
                Tailwind
            </p>

            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Karl Horning. All rights reserved.
            </p>
        </footer>
    );
}
