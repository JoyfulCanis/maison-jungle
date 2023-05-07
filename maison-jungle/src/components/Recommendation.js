function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    return isSpring ? <div className="lmj-title__reco--true">C'est le printemps, rempotez ! 🌿</div> : <div className="lmj-title__reco--false">Ce n'est pas le moment de rempoter 🍂</div>
}

export default Recommendation