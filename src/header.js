export function Header() {
    return (
        <div>
        <header>
            This is header tag for practicing react
        </header>
        <h1 id="summation" className="test">
            {sumOfNumbers(23,56)}
        </h1>
        </div>
    )
}
function sumOfNumbers(a, b) {
    return a % b;
}