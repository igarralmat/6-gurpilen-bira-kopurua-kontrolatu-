let Birak = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    basic.showNumber(parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1)))
})
basic.forever(function () {
    Birak = parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1))
    if (Birak < 29) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 100)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
