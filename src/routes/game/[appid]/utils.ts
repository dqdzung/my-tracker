export const calculateCheevoCompletion = (listCheevo: {
  apiname: string,
  achieved: 0 | 1,
  name: string,
  description: string
}[]) => {
  const achieved = listCheevo.filter(cheevo => cheevo.achieved === 1).length
  const percentage = (achieved / listCheevo.length * 100).toFixed()
  return {
    achieved,
    percentage: parseInt(percentage)
  };
}