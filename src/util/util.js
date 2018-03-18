const Util = {
    isValidString: (value) => {
        return (
            typeof value == 'string' &&
            value != ''
        )
    },
    currentYear: () => (new Date()).getFullYear()
}

export default Util