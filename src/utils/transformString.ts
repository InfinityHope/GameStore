export const transformString = (str: string) => {
    return str.replace(/\s/gi, '-').toLowerCase()
}
