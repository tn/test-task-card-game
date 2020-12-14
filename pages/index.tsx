import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useStopwatch } from 'react-timer-hook'
import { connect } from 'react-redux'
import { Card } from '../components/card/card'
import { Modal } from '../components/modal/modal'
import { Stats } from '../components/stats/stats'
import { Table } from '../components/table/table'
import { addToPair, closePair, fillTable, increaseStep, makePair, openCard } from '../store/actions'
import { GameState } from '../store/store'
import { Figures } from '../types/figures'

const Home = (props) => {
  const [end, setEnd] = useState(false)
  const { dispatch, pair, nextCards, steps } = props
  const {
    seconds,
    minutes,
    hours,
    pause
  } = useStopwatch({ autoStart: true });

  useEffect(() => {
    props.dispatch(fillTable())
  }, [])

  useEffect(() => {
    if (pair && pair.length === 2) {
      const compare = pair[0].value === pair[1].value

      dispatch(increaseStep())

      if (compare) {
        dispatch(makePair())
      } else {
        setTimeout(() => {
          dispatch(closePair())
        }, 1500)
      }
    }
  }, [pair])

  useEffect(() => {
    if (steps > 0 && nextCards.every(card => card.off)) {
      pause()
      setEnd(true)
    }
  }, [nextCards])

  const handleCardFlip = (card: any) => {
    if (pair && pair.length <= 1) {
      dispatch(openCard(card))
      dispatch(addToPair(card))
    }
  }

  const time = `${hours}:${minutes}:${seconds}`

  return (
    <div>
      <Head>
        <title>Find pair game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {end && <Modal>Congrats! Your result is: {props.steps} steps in {time}</Modal>}
      <div>
        <Stats steps={props.steps} duration={time} />
        <Table>
          {props.nextCards.map(card => <Card key={Figures[card.suit] + card.value} {...card} onFlip={handleCardFlip} />)}
        </Table>
      </div>
    </div>
  )
}

export default connect((state: GameState) => state)(Home)
