

export function startProgress() {
    localStorage.setItem("intro", "done");
    localStorage.setItem("first", "none");
    localStorage.setItem("second", "none");
    localStorage.setItem("third", "none");
}

export function setStart(complete) {
    localStorage.setItem("intro", complete);
}

export function setProgressOne(complete) {
    localStorage.setItem("first", complete);
}

export function setProgressTwo(complete) {
    localStorage.setItem("second", complete);
}

export function setProgressThree(complete) {
    localStorage.setItem("third", complete);
}

export function getProgess() {
    const response = {
        "intro": localStorage.getItem("intro"),
        "first": localStorage.getItem("first"),
        "second": localStorage.getItem("second"),
        "third": localStorage.getItem("third"),
    }
    return response
}
