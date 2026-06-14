function getElementWidth(content, padding, border) { 
    let contentNum = content;
    contentNum = Number.parseFloat(content);
    let paddingNum = padding;
    paddingNum = Number.parseFloat(padding);
    let borderNum = border;
    borderNum = Number.parseFloat(border);

    const boxSizing = contentNum + paddingNum * 2 + borderNum * 2;
    return boxSizing;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200