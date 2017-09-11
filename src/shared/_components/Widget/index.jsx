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
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  bodyText: {
    padding: '0.5rem'
  }
})

const isLoading = () => Math.random() > 0.25

const Widget = ({
  full = false,
  loading = isLoading(),
  classes,
  title = '',
  subtitle = '',
  content = '',
}) => {
  const className = classnames(classes.card, { [classes.full]: full })
  const contentClass = classnames(classes.cardContent, { [classes.loading]: loading })

  return (
    <div className={className}>
      <Card className={classes.cardWrap}>
        <CardContent className={classes.cardContent}>
          <Typography type='headline' component='h2'>
            {title}
          </Typography>
          <Typography type='subheading'>
            {subtitle}
          </Typography>
          <div className={contentClass}>
            {loading
            ? <CircularProgress className={classes.progress} />
            : content}
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
