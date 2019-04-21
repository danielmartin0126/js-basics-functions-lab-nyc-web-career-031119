// Code your solution in this file!

function distanceFromHqInBlocks(st) {
  hq = 42
  if (st >hq) {
    answer = st - hq
  }
  else {
    answer = hq - st
  }
  return answer
}

function distanceFromHqInFeet(st) {
  answer = (distanceFromHqInBlocks(st) * 264)
  return answer
}