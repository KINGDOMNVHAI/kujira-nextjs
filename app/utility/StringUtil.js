export const getUpperCase = (str) => {
    if (str != null && str != undefined && str != "") {
        str.trim();
        return str.toUpperCase();
    }
    return "";
}

export const getLowerCase = (str) => {
    if (str != null && str != undefined && str != "") {
        str.trim();
        return str.toLowerCase();
    }
    return "";
}

export const getUpperCaseFirstChar = (str) => {
    if (str != null && str != undefined && str != "") {
        str.trim();
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    return "";
}

export const getUpperCaseFirstCharEachWord = (str) => {
    if (str != null && str != undefined && str != "") {
        str.trim();
        const words = str.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ");
    }
    return "";
}

export const isNullOrEmpty = (str) => {
    if (str != null && str != undefined && str != "") {
        return false;
    }
    return true;
}

export const getArrayCharactersInString = (text, arrChar) => {
    const arrResult = [];
    arrChar.forEach((element) => {
        if (text.includes(element)) {
            arrResult.push(element)
        }
    });
    return arrResult;
}