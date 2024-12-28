export const pprint = (a) => {
    return a.map((n) => <span>{n} </span>)
        .reduce((acc, x) => acc === null ? x : <>{acc} | {x}</>, null)
}

const zip = (a, b) => a.map((k, i) => [k, b[i]]);