const notFound = (req,res)=>{
  res.status(404).json({msg: "page not found"})
}

export default notFound