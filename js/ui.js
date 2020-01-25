const replace = element => (addClass,removeClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
}


export default replace