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

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    answer = (start - end) * 264
  }
  else {
    answer = (end - start) * 264
  }
  return answer
}

function calculatesFarePrice(start,end) {
  dist = distanceTravelledInFeet(start,end)
  
  switch dist{
    
  }
}

