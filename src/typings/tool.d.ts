interface IToolPlayer {
  displayName: string
  handle: string
}

interface IToolProps {
  classes: {
    form: string
  }
}

interface IToolNightbot {
  bracket: string
  social: string
}

interface IToolState {
  scoreboard: IScoreboardState
  camera: ICameraState
  bracket: string
  participants: Array<IToolPlayer>
  nightbot: IToolNightbot
}

interface IToolScoreboardExpansionPanelProps {
  classes: {
    form: string
  },
  participants: Array<IToolPlayer>
  scoreboard: IScoreboardState
  updateScoreboard: Function
  changeScoreboardValue: Function
  reset: Function
  swap: Function
}

interface IToolCameraExpansionPanelProps {
  classes: {
    form: string
  }
  camera: ICameraState
  updateCamera: Function
  changeCameraValue: Function
}

interface IToolSettingsExpansionPanelProps {
  bracket: string
  changeBracketValue: Function
  updateParticipants: Function
  importFilesChange: Function
  exportFiles: Function
}

interface IToolNightbotExpansionPanelProps {
  classes: {
    form: string
  }
  nightbot: IToolNightbot
  updateNightbot: Function
  changeNightbotValue: Function
}