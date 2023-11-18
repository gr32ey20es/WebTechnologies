function UI ( {time} ) {
    let days = Math.floor(time / 86400)
    time -=  days * 86400
    let hours = Math.floor(time / 3600)
    time -= hours * 3600
    let minutes = Math.floor(time/ 60)
    let seconds = time - minutes * 60

    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds

    return (
        <div>
            <p>{days}:{hours}:{minutes}:{seconds}</p>
        </div>
    )
}

export default UI