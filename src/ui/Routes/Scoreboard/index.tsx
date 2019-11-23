import * as React from 'react';
import withStyles from 'react-jss';
import { merge } from 'lodash';

import Socket from '~/ui/Services/socket';
import ScoreboardTextBox from '~ui/Components/ScoreboardTextBox';
import Text from '~ui/Components/Text';
import theme from '../../../theme';

interface IScoreboardProps {
  classes: {
    root: string
  }
}
interface IScoreboardState {
  io: Socket,
  p1n: string
  p2n: string
  p1s: number
  p2s: number
  tl: string
  tr: string
  bl: string
  br: string
}

const styles = {
  root: theme.container,
};

class Scoreboard extends React.Component<IScoreboardProps, IScoreboardState> {
  constructor(props) {
    super(props);

    this.state = {
      io: new Socket(),
      p1n: 'Player 1',
      p2n: 'Player 2',
      p1s: 0,
      p2s: 0,
      tl: 'HBK',
      tr: '#000',
      bl: 'Brewdog',
      br: 'Brighton',
    };
  }

  render() {
    const { classes } = this.props;
    const {
      p1n, p2n, p1s, p2s, tl, tr, bl, br,
    } = this.state;

    const smallText: IThemeFont = merge({}, theme.rawlineBold, {
      fontSize: '30pt',
    });

    return (
      <div className={classes.root}>
        <ScoreboardTextBox
          // hbk text
          left={0}
          right={0}
          border={theme.borderBottom}
        >
          <Text
            font={smallText}
          >
            {tl}
          </Text>
          <Text
            font={smallText}
            color={theme.orange}
          >
            {tr}
          </Text>
        </ScoreboardTextBox>
        <ScoreboardTextBox
          // player 1 name
          right={1216}
          textAlign="right"
          border={theme.borderBottom}
        >
          <Text>{p1n}</Text>
        </ScoreboardTextBox>
        <ScoreboardTextBox
          // player 1 score
          left={714}
          width={50}
          border={theme.borderBottom}
        >
          <Text>{p1s}</Text>
        </ScoreboardTextBox>
        <ScoreboardTextBox
          // player 2 name
          left={1216}
          textAlign="left"
          border={theme.borderBottom}
        >
          <Text>{p2n}</Text>
        </ScoreboardTextBox>
        <ScoreboardTextBox
          // player 2 score
          right={714}
          width={50}
          border={theme.borderBottom}
        >
          <Text>{p2s}</Text>
        </ScoreboardTextBox>
        <ScoreboardTextBox
          // bottom text
          left={0}
          right={0}
          bottom={0}
          border={theme.borderTop}
        >
          <Text>
            {bl}
          </Text>
          <Text
            color={theme.orange}
          >
            {br}
          </Text>
        </ScoreboardTextBox>
      </div>
    );
  }
}

export default withStyles(styles)(Scoreboard);
