
// (fuction() {
    "use strict"
  
    let active = null
  
    const places = {
      "Gym House": {x: 60, y: 240},
      "Potion shop": {x: 185, y: 240},
      "Kiet's house": {x: 320, y: 209},
      "Hospital": {x: 455, y: 200},
      "Bao's house": {x: 414, y: 334},
      "Torung's house": {x: 316, y: 372},
      "Dubai's house": {x: 165, y: 370},
      "Sky's shop": {x: 59, y: 372},

    }
    const placeKeys = Object.keys(places)
  
    const speed = 2
  
    class Animation {
      constructor(worldState, robot, robotState) {
        this.worldState = worldState
        this.robot = robot
        this.robotState = robotState
        this.turn = 0
  
        let divStatus = document.createElement("div")
        let demoContainer = document.getElementById("demo");
        let outer = (window.__sandbox ? window.__sandbox.output.div : document.body), doc = outer.ownerDocument
        this.node = outer.appendChild(doc.createElement("div"))
        this.node.id = "game";
        demoContainer.appendChild(this.node)
        this.node.style.cssText = "position: relative; line-height: 0.1; margin-left: 10px"
        this.map = this.node.appendChild(doc.createElement("img"))
        this.map.src = "images/village2x.png"
        this.map.style.cssText = "vertical-align: -8px"
        this.robotElt = this.node.appendChild(doc.createElement("div"))
        this.robotElt.style.cssText = `position: absolute; transition: left ${0.8 / speed}s, top ${0.8 / speed}s;`
        let robotPic = this.robotElt.appendChild(doc.createElement("img"))
        robotPic.src = tempUrl_moving;
        this.parcels = []
  
        let divStatusContent = document.createElement("div")
        let titleStatusContent = document.createElement("h3")
        this.node.appendChild(divStatus)
        divStatus.appendChild(divStatusContent)
        divStatusContent.appendChild(titleStatusContent)
        divStatusContent.id = "statusContent"
        divStatus.id = "statusContainer"
        titleStatusContent.innerHTML = "Number of Step"
        this.text = divStatusContent.appendChild(doc.createElement("span"))
        this.button = divStatusContent.appendChild(doc.createElement("button"))
        this.button.style.cssText = "color: white; background: #28b; border: none; border-radius: 2px; padding: 2px 5px; line-height: 1.1; font-family: sans-serif; font-size: 80%"
        this.button.textContent = "Stop"
  
        this.button.addEventListener("click", () => this.clicked())
        this.schedule()
  
        this.updateView()
        this.updateParcels()
  
        this.robotElt.addEventListener("transitionend", () => this.updateParcels())
      }
  
  
      updateView() {
        let pos = places[this.worldState.place]
        this.robotElt.style.top = (pos.y - 38) + "px"
        this.robotElt.style.left = (pos.x - 16) + "px"
  
        this.text.textContent = ` Turn ${this.turn} `
      }
  
      updateParcels() {
        while (this.parcels.length) this.parcels.pop().remove()
        let heights = {}
        for (let {place, address} of this.worldState.parcels) {
          let height = heights[place] || (heights[place] = 0)
          heights[place] += 14
          let node = document.createElement("div")
          let offset = placeKeys.indexOf(address) * 16
          node.style.cssText = "position: absolute; height: 16px; width: 16px; background-image: url(img/parcel2x.png); background-position: 0 -" + offset + "px";
          if (place == this.worldState.place) {
            node.style.left = "25px"
            node.style.bottom = (20 + height) + "px"
            this.robotElt.appendChild(node)
          } else {
            let pos = places[place]
            node.style.left = (pos.x - 5) + "px"
            node.style.top = (pos.y - 10 - height) + "px"
            this.node.appendChild(node)
          }
          this.parcels.push(node)
        }
      }
  
      tick() {
        let {direction, memory} = this.robot(this.worldState, this.robotState)
        this.worldState = this.worldState.move(direction)
        this.robotState = memory
        this.turn++
        this.updateView()
        if (this.worldState.parcels.length == 0) {
          this.button.remove()
          this.text.textContent = ` Finished after ${this.turn} turns`
          this.robotElt.firstChild.src = tempUrl_stand
        } else {
          this.schedule()
        }
      }
  
      schedule() {
        this.timeout = setTimeout(() => this.tick(), 1000 / speed)
      }
  
      clicked() {
        if (this.timeout == null) {
          this.schedule()
          this.button.textContent = "Stop"
          this.robotElt.firstChild.src = tempUrl_stand
        } else {
          clearTimeout(this.timeout)
          this.timeout = null
          this.button.textContent = "Start"
          this.robotElt.firstChild.src = tempUrl_moving
        }
      }
    }
  
    window.runRobotAnimation = function(worldState, robot, robotState) {
      if (active && active.timeout != null)
        clearTimeout(active.timeout)
      active = new Animation(worldState, robot, robotState)
    }
//   })()







  
  
    
  
  