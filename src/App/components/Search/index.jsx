import React from 'react'
import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
    color: theme.palette.common.white,  
  },
})


const Search = ({ classes }) => (
  <div>
    <Input
      placeholder="Search..."
      className={classes.input}
      inputProps={{
        'aria-label': 'Site Search',
      }}
      disableUnderline
      fullWidth
    />
  </div>
)

export default withStyles(styles)(Search)