export const pprint = (a) => {
    return a.map((n) => <span>{n} </span>)
        .reduce((acc, x) => acc === null ? x : <>{acc} | {x}</>, null)
}
