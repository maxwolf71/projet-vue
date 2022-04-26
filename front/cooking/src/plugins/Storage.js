const storage = {
    store(variableName, value) {
        document.localStorage.store(variableName, value);
    }
}

export default storage