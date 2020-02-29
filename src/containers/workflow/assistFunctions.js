const numberOfCreators = (workflowDB) => {
  return workflowDB.length
}

const getCreatorName = (workflowDB, creatorId, language) => {
  return workflowDB[creatorId].name[language]
}

const getCreatorNick = (workflowDB, creatorId) => {
  return workflowDB[creatorId].nick
}

const getCreatorAvatar = (workflowDB, creatorId) => {
  return workflowDB[creatorId].avatar
}

const getWhatIsDone = (workflowDB, creatorId, language) => {
  return workflowDB[creatorId].whatIsDone[language]
}

const getNumberOfTasks = (workflowDB, creatorId, language) => {
  return workflowDB[creatorId].whatIsDone[language].length
}

export { numberOfCreators, getCreatorName, getCreatorNick, getWhatIsDone, getNumberOfTasks, getCreatorAvatar }