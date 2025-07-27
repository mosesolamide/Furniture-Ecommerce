import type { JSX } from "react"
import { Link } from "react-router-dom"

export default function NotFound():JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center h-50">
            <pre>Sorry, the page you were looking for was not found.</pre>
            <Link 
                to="/"
                className="underline"
            >
                Return to Home
            </Link>
        </div>
    )
}
