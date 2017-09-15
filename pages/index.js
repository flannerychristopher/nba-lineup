// import fetch from 'isomorphic-unfetch'
import NBA from 'nba'

import PlayerCard from '../components/player_card'

const Index = (props) => (
  <div>
    <PlayerCard playerInfo={props.playerInfo} />
  </div>
)

Index.getInitialProps = async function () {
  const data = await NBA.stats.playerInfo({ PlayerID: 202330 })

  return {
    playerInfo: data.commonPlayerInfo[0]
  }
}

export default Index

// teamId: 1610612762
// stats.nba.com/stats/commonplayerinfo/?playerID=202330
// https://github.com/bttmly/nba