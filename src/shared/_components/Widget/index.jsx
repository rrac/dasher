import React from 'react'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  card: {
    width: '50%',
    padding: '0.5rem',
    display: 'flex',
    boxSizing: 'border-box'
  },
  full: {
    width: '100%',
  },
  cardInner: {
    height: '100%'
  },
  cardWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
})

const Widget = ({ full = false, loading = true, classes }) => {
  const className = classnames(classes.card, { [classes.full]: full })
  const content = classnames(classes.cardContent, { [classes.loading]: loading })

  const Content = loading
    ? <CircularProgress className={classes.progress} />
    : (
      <h2>My content!</h2>
    )
  return (
    <div className={className}>
      <Card className={classes.cardWrap}>
        <CardContent className={classes.cardContent}>
          <Typography type='headline' component='h2'>
            Lizard
          </Typography>
          <Typography component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <div className={content}>
            {Content}
          </div>
        </CardContent>
        <CardActions>
          <Button dense color='primary' disabled={loading}>
            Share
          </Button>
          <Button dense color='primary' disabled={loading}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

Widget.displayName = 'Widget'

export default withStyles(styles)(Widget)
