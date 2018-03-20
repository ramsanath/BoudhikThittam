const Util = {
    isValidString: (value) => {
        return (
            typeof value == 'string' &&
            value != ''
        )
    },
    isValidObject: (value) => {
        return (
            typeof value == 'object' &&
            Object.keys(value).length != 0
        )
    },
    currentYear: () => (new Date()).getFullYear()
}

export default Util