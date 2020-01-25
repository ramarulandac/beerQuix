const formatDate = (date) => {
    date = date.split('-');
    return `${date[1]}/${date[0]}`
}

export default formatDate
 