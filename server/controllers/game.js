
export const play = (req, res) => {
  console.log("You are playing the game");
  return res.status(200).json({msg: "Playing!"});
}