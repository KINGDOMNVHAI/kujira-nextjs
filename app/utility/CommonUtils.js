export const checkNull = (dataJson) => {
    return !!dataJson && Object.keys(dataJson).length;
}

export const isUndefined = (value) => {
    if (typeof (value) !== 'undefined' && value != null) {
        return true;
    }
    return false;
}

const element = () => {
    return <div dangerouslySetInnerHTML={{ __html: '<h1>Hello world!</h1>' }} />
};


export const copyIntance = (obj) => {
    var copied = Object.assign(
        Object.create(
            Object.getPrototypeOf(obj)
        ), origin
    );
    return copied;
}

export const renderInputCustome = (value, id) => {
    if (!isUndefined(value)) {
        value = 0;
    }
    return `평탄도 &le; <input type="text" id=${id} value=${value} class="input-custome" />mm`;
}

export const renderInputCustome2 = (value1, id1, value2, id2, char) => {
    if (!isUndefined(value1)) {
        value1 = 0;
    }
    if (!isUndefined(value2)) {
        value2 = 0;
    }
    return `<input type="text" id=${id1} value=${value1} class="input-custome"/> ${char} <input type="text" id=${id2} value=${value2} class="input-custome" />`;
}
