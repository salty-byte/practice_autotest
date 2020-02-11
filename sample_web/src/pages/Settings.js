import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SettingForm from '../components/UserSettingForm';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
});

class Settings extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className = {classes.root}>
        <h3>設定</h3>
        <div>Not implemented.今後実装予定です。</div>
        {/*<ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            ユーザ設定
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <SettingForm />
          </ExpansionPanelDetails>
        </ExpansionPanel>*/}
      </div>
    );
  }
}

export default withStyles(styles)(Settings);
