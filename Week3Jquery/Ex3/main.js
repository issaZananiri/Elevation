const DynamicboxA = "<div class='box' id='left'> </div>"
const DynamicboxB = "<div class='box' id='right'> </div>"
const eleml = $(DynamicboxA)
$("body").append(eleml)
const elemr = $(DynamicboxB)
$("body").append(elemr)
isLeftBoxMagenta = true
isRightBoxMagenta = true
$(eleml).hover(function(){

  isLeftBoxMagenta = true
  $(elemr).css("background-color", "red")
  $(eleml).css("background-color", "#8e44ad")
})
$(elemr).hover(function(){

  isLeftBoxMagenta = false
  $(eleml).css("background-color", "red")
  $(elemr).css("background-color", "#8e44ad")
})