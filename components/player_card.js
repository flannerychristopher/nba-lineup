function PlayerCard({ playerInfo }) {
  if (!playerInfo) {
    return <div>fetching player info ...</div>
  }
  return (
    <div>
      <h1>{playerInfo.displayFirstLast}</h1>
      <ul>
        <li>born: {playerInfo.birthdate.slice(0, 4)}</li>
        <li>years in NBA: {playerInfo.seasonExp}</li>
        <li>drafted {playerInfo.draftYear}, pick {playerInfo.draftNumber} in round {playerInfo.draftRound}</li>
        <li>height: {playerInfo.height}</li>
        <li>weight: {playerInfo.weight}</li>
        <li>position: {playerInfo.position}</li>
      </ul>
    </div>
  )
}

export default PlayerCard