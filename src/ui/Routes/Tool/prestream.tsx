import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Alert from '@material-ui/lab/Alert';

const PreStreamExpansionPanel = (props: IToolPreStreamExpansionPanelProps) => {
  const {
    change,
    classes,
    prestream,
    update,
    toolKey,
    unsaved,
  } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>PreStream</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <form
          onSubmit={(e) => update(e, toolKey)}
          className={classes.form}
          noValidate
        >
          <Grid
            container
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                label="Event Name"
                fullWidth
                value={prestream.event}
                onChange={(e) => change(toolKey, 'event', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Venue Name"
                fullWidth
                value={prestream.venue}
                onChange={(e) => change(toolKey, 'venue', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Game/Tournament Name"
                fullWidth
                value={prestream.game}
                onChange={(e) => change(toolKey, 'game', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Background"
                fullWidth
                value={prestream.bg}
                onChange={(e) => change(toolKey, 'bg', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Text"
                fullWidth
                value={prestream.startText}
                onChange={(e) => change(toolKey, 'startText', e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                label="Countdown (Seconds)"
                fullWidth
                type="number"
                value={prestream.countdown}
                onChange={(e) => change(toolKey, 'countdown', e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <FormControlLabel
                control={(
                  <Switch
                    checked={prestream.showTimer}
                    onChange={(e) => change(toolKey, 'showTimer', e.target.checked)}
                    color="primary"
                  />
                )}
                label="Show Timer"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Update Prestream
              </Button>
            </Grid>
            {
              unsaved && (
              <Grid item xs={12}>
                <Alert severity="warning">Unsaved Changes!</Alert>
              </Grid>
              )
            }
          </Grid>
        </form>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default PreStreamExpansionPanel;
